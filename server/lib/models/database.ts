import { Sequelize } from 'sequelize-typescript';

import { Environment } from './../utils/environment';

import Todo from './todo.model';
import User from './user.model';

export interface ISequelizeModels {
  User: typeof User;
  Todo: typeof Todo;
}

class Database {
  private mModels: ISequelizeModels;
  private mSequelize: Sequelize;

  constructor() {
    this.mSequelize = new Sequelize( Environment.dbName, Environment.dbUser, Environment.dbPass, {
      ...Environment.dbConfig,
      storage: ':memory:',
      sync: { force: true },
      modelPaths: [__dirname + '*/*.model.ts']
    });

    this.mModels = ({} as any);
    this.mModels = this.getModels();

    this.mSequelize.sync().then(async result => {
      if ((await this.mModels.Todo.count()) === 0) {
        await this.mModels.User.create({ name: 'Javier', password: 'S3CR3ET0' }).then(async (r) => {
          r.createTodo({ label: 'Pues funciona y todo', completed: true });
          r.createTodo({ label: 'La FK en 1:M se pone en el M (Y suele ser la ID del 1) 🤠', completed: true });
          r.createTodo({ label: 'No hace falta poner el userID (Por que es la FK)', completed: true });
          r.createTodo({ label: 'Leer la documentacion es bien', completed: false });
          const todos = await r.getTodos();
          console.dir(todos.map(t => ({ id: t.id, label: t.label })));
        });
      }
    });
  }

  public getModels() {
    return (this.mSequelize as any).models;
  }

  public getSequelize() {
    return this.mSequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();
export const db = database;
