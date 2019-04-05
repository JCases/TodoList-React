import {Table, Column, Model, HasMany, DataType, PrimaryKey, Unique, Length, Default} from 'sequelize-typescript';
import Todo from './todo.model';

@Table({ timestamps: true, paranoid: true })
export default class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id?: string;

  @Unique
  @Column
  token?: string;

  @Length({ min: 2, max: 40 })
  @Column
  name?: string;

  @Column
  password?: string;

  @HasMany(() => Todo, { foreignKey: 'id' })
  todos?: Todo[];
}