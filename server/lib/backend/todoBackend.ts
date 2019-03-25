import { models } from '../models/database';
import { Errors } from '../shared/interfaces/index'
import { ITodoItem } from '../shared/interfaces/index';

class TodoBackend {

  public async getTodos() {
    const todos = await models.Todo.findAll();
    if (todos) return { result: todos };
    return { error: { code: Errors.unexpected } };
  }

  public async createTodo(todo: ITodoItem) {
    if (todo.label && todo.label.length === 0) return { error: { code: Errors.incorrectRequest } };
    return { result: (await models.Todo.create( { label: todo.label, completed: todo.completed } )).dataValues };
  }

  public async updateTodo(todo: ITodoItem) {
    if (todo.label && todo.label.length === 0) return { error: { code: Errors.incorrectRequest } };
    // FIRST RESULT RETURN
    return { result: (await models.Todo.update(todo, { where: { id: todo.id! }, returning: true }))[1][0] };
  }

  public async deleteTodo(todo: ITodoItem) {
    return { result:  (await models.Todo.destroy({ where: { id: todo.id! } } )) };
  }
}

const todoBackend = new TodoBackend();
export default todoBackend;
