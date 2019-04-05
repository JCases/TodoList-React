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
    console.log(this.mModels);

    this.mSequelize.sync({ force: true }).then(async result => {
      if ((await this.mModels.Todo.count()) === 0) {
          const user = this.mModels.User.create({ name: 'Javier', token: '1234', password: 'S3CR3ET0' });
          this.mModels.Todo.create({ label: 'Hacer un Todo List', completed: true, user });
          this.mModels.Todo.create({ label: 'Entender la estructura de Jose', user });
          this.mModels.Todo.create({ label: 'Jose, el Styled Components es una mierda', completed: true, user });
          this.mModels.Todo.create({ label: 'Hola a todos chavales, bienvenidos a un nuevo video...', user });
          this.mModels.Todo.create({ label: 'Me quiero morir porque mi vida es una mierda: Sergio.', user });
      }
      console.log(await this.mModels.Todo.findAll());
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