import {Table, Column, Model, HasMany, DataType, PrimaryKey, Unique} from 'sequelize-typescript';

@Table({ timestamps: true, paranoid: true })
export class User extends Model<User> {
  @Column(DataType.UUIDV4)
  @PrimaryKey
  id?: string;

  @Column
  @Unique
  token?: string;

  @Column
  name?: string;

  @Column
  password?: string;

  @HasMany(() => Todo)
  todos?: Todo[];
}