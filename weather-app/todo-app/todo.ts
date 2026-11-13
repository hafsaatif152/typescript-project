interface Todo {
  id: number;
  title: string;
  done: boolean;
}
let nextid:number=1;


function  addTodo(title:string):void
{
 todos.push({id:nextid,title,done:false}); 
 nextid++;
}
function completeTodo(id:number):void{
  for(const f of todos)
  {
    if(f.id===id)
    {
     f.done=true;
     console.log(`${f.title} is done.`);
    }
  }

}
function removeTodo(id:number):void{
  todos=todos.filter(m=>m.id!==id);
}
function listTodos():void{
  for (let char of todos)
  {
    console.log(`${char.title}${char.done ? " ✓":" "}`);
  }
}
let todos:Todo[]=[];

addTodo("milk");
addTodo("spinach");
addTodo("door lock");
addTodo("school bag");
addTodo("bracelete");
completeTodo(3);
console.log(`all items`);
listTodos()
removeTodo(4);
console.log(`After remove an item `);
listTodos();


// Your tasks:
// 1. addTodo(title: string): void
// 2. completeTodo(id: number): void
// 3. removeTodo(id: number): void
// 4. listTodos(): void  -> prints "[x] Buy milk" or "[ ] Buy milk"
// 5. Call each function a few times to test
