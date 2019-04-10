// import Sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import sqlite3 from 'sqlite3';

// import * as path from 'path';
// import * as fs from 'fs';

import Todo from './todo.model';
import User from './user.model';

export interface ISequelizeModels {
  User: typeof User;
  Todo: typeof Todo;
}

// FIXME: NOT WORK IN NEW VERSION OF SEQUELIZE AND NOT INSERT ENVIROMENTS DATA

class Database {
  // private baseName: string;
  private mModels: ISequelizeModels;
  private mSequelize: Sequelize;

  constructor() {
    // this.baseName = path.basename(module.filename);
    new sqlite3.Database('./data.db');

    this.mSequelize = new Sequelize('sqlite:./data.db');
    this.mModels = ({} as any);

    this.mSequelize.addModels([__dirname + '*/*.model.ts']);

    this.mModels = this.getModels();
    // console.log(this.mModels);

    this.mSequelize.sync({ force: true }).then(async result => {
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
      // console.log(await this.mModels.Todo.findAll());
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