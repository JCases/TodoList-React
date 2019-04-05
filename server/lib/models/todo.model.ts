import {Table, Column, Model, DataType, PrimaryKey, Default, AllowNull, BelongsTo, Length} from 'sequelize-typescript';
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

  @BelongsTo(() => User, { foreignKey: 'id' })
  user?: User;
}
