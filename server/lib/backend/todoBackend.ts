import { models } from '../models/database';
import { IResponse, Errors } from '../shared/interfaces/index'

class TodoBackend {

  public async getTodos() {
    const todos = await models.Todo.findAll();
    if (todos) return { result: todos };
    return { error: { code: Errors.unexpected } };
  }

  public async createTodo(label: string, completed: boolean) {
    if (label.length === 0) return { error: { code: Errors.incorrectRequest } };
    return (await models.Todo.create({ label: label, completed: completed })).dataValues;
  }
}

const todoBackend = new TodoBackend();
export default todoBackend;
