import SequelizeStatic from 'sequelize'; // tslint:disable-next-line
import { Sequelize } from 'sequelize';

import { Environment } from './../utils/environment';

import * as path from 'path';
import * as fs from 'fs';

import { ITodoAttributes, ITodoInstance } from './todo';

export interface ISequelizeModels {
  Todo: SequelizeStatic.Model<ITodoInstance, ITodoAttributes>,
}

class Database {
  private baseName: string;
  private mModels: ISequelizeModels;
  private mSequelize: Sequelize;

  constructor() {
    this.baseName = path.basename(module.filename);

    this.mSequelize = new SequelizeStatic(Environment.dbName!, Environment.dbUser!, Environment.dbPass!, Environment.dbConfig);
    this.mModels = ({} as any);

    fs.readdirSync(__dirname).filter(file => file !== this.baseName && file.indexOf('.map') < 0 && file.indexOf('.DS_Store') < 0).forEach(file => {
      const model = this.mSequelize.import(path.join(__dirname, file));
      (this.mModels as any)[model.name] = model;
    });

    Object.keys(this.mModels).forEach((modelName: string) => {
      if (typeof (this.mModels as any)[modelName].associate === 'function') {
        (this.mModels as any)[modelName].associate(this.mModels);
      }
    });

    const myModels = this.getModels();

    this.mSequelize.sync({ force: false }).then(async result => {
      if ((await myModels.Todo.count()) === 0) {
        myModels.Todo.create({ label: 'Hacer un Todo List' });
        myModels.Todo.create({ label: 'Entender la estructura de Jose' });
      }
    });

  }

  public getModels() {
    return this.mModels;
  }

  public getSequelize() {
    return this.mSequelize;
  }
}

const database = new Database();
export const models = database.getModels();
export const sequelize = database.getSequelize();
export const db = database;