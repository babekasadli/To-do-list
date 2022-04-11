class TodoService{
    constructor(todos = []){
        this._todos = todos;
    }
    addTodo(title){
        this._todos = [...this._todos, title];
    }
    deleteTodo(id){
        this._todos = this._todos.filter(t => t.id !== id);
    }
}

const service = new TodoService();