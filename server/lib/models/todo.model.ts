import {Table, Column, Model, DataType, PrimaryKey, Default, AllowNull, BelongsTo, Length, ForeignKey, Unique} from 'sequelize-typescript';
import User from './user.model';

@Table({ timestamps: true, paranoid: true })
export default class Todo extends Model<Todo> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id?: string;

  @Length({ min: 2, max: 100 })
  @AllowNull(false)
  @Column
  label?: string;

  @Default(false)
  @Column
  completed?: boolean;

  @AllowNull(false)
  @Unique(false)
  @ForeignKey(() => User)
  @Column
  userId?: number;

  @BelongsTo(() => User)
  user?: User;
}
