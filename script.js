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

    _generateID(){
        return this._todos?.length ? this._todos[this._todos.length - 1].id + 1 : 1;
    }
}

const service = new TodoService();
console.log(service.getTodos());
service.addTodo('Just do it, NIKE!');
console.log(service.getTodos());
service.addTodo('let him cry');
console.log(service.getTodos());
service.deleteTodo(service.getTodos().fins(t => t.title === 'let him cry').id);
console.log('id: ',id);
service.deleteTodo();
console.log(service.getTodos());
