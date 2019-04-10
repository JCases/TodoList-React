import { Table, Column, Model, HasMany, DataType, PrimaryKey, Unique, Length, Default } from 'sequelize-typescript';
import Todo from './todo.model';
import { HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyRemoveAssociationMixin } from 'sequelize';


@Table({ timestamps: true, paranoid: true })
export default class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id?: string;

  @Unique
  @Length({ min: 2, max: 40 })
  @Column
  name?: string;

  @Column
  password?: string;

  // @HasMany(() => Todo, { foreignKey: 'id' }) // Estas sobreescribiendo la ID del todo con la del usuario 🙃
  @HasMany(() => Todo, { foreignKey: 'userId' })
  todos?: Todo[];

  // Puedes usar sequelize y sequelize-typescript a la vez, no son exclusivos
  public createTodo!: HasManyCreateAssociationMixin<Todo>;
  public getTodos!: HasManyGetAssociationsMixin<Todo>;
  public removeTodo!: HasManyRemoveAssociationMixin<Todo, 'id'>;
}