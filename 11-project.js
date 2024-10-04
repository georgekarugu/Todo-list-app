
const todoList=JSON.parse( localStorage.getItem('todo')) ||
[
/*  {
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
   name: 'wash dishes',
   dueDate: '2022-12-22'
}*/
];
renderTodolist();
function renderTodolist(){
      let todoListHTML='';
    for(let i=0; i<todoList.length; i++){
      const todoObject=todoList[i];
     // const name = todoObject.name;
     // const dueDate = todoObject.dueDate;
      const {name, dueDate} = todoObject;
      const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
           
         <button onclick="
         localStorage.removeItem('todo');
          todoList.splice(${i}, 1);
          renderTodolist();
          " class="delete-todo-button">Delete</button>
        
        `;
      todoListHTML+=html;

    }
   


      document.querySelector('.js-todo-list')
      .innerHTML=todoListHTML;


}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=  inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=  dateInputElement.value;

    todoList.push({
     // name: name,
     // dueDate: dueDate,
      name,
      dueDate
    });

    localStorage.setItem('todo', JSON.stringify(todoList));

    

    inputElement.value='';
    inputElement.value='';

    renderTodolist();
}


