import { DataTypes, Instance, Sequelize } from 'sequelize';
import * as SequelizeStatic from 'sequelize';
import { ITodoItem } from '../shared/interfaces/index';

export interface ITodoAttributes extends ITodoItem { }

export interface ITodoInstance extends Instance<ITodoAttributes> {
  dataValues: ITodoItem;
}

export default function (sequelize: Sequelize, dataTypes: DataTypes): SequelizeStatic.Model<ITodoInstance, ITodoItem> {
  const todos = sequelize.define<ITodoInstance, ITodoItem>('Todo', {
    id: {
      type: dataTypes.UUID,
      defaultValue: dataTypes.UUIDV4,
      primaryKey: true,
    },
    label: {
      type: dataTypes.TEXT(),
      allowNull: false,
    },
    completed: {
      type: dataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          fields: ['label'],
        },
      ],
    });

  return todos as any;
}

// FIXME: CHECK FOR NEW VERSION -> INTERFACES

