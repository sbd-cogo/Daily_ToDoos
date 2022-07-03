let tasks = [];
let counter = 0;
var currentEditID = -1;


function AddTextToEditTextBox(id){
    
    var todoEditBox = document.getElementById('todoEdit');
    var task;
    tasks = tasks.map(t => {
        if(t.id === id) {
            task = t.comment;
        }
        return t;
    });

    // var task = tasks[taskID-1].todo;
    //add value to the box
    todoEditBox.value = task;
    currentEditID = id;

    
    showTodo();
}

function saveEditedTask(){
    var todoEditBox = document.getElementById('todoEdit').value;
    tasks = tasks.map(t => {
        if(t.id === currentEditID) {
            t.comment = todoEditBox;
        }
        return t;
    });
    document.getElementById('todoEdit').value = "";
    showTodo();
    //empty the box now
    // reset the edit variable
}

function doneTodo(id){
    // alert("akdbc")
    tasks = tasks.map(t => {
        if(t.id === id){
            if(t.status === 1){
                t.status = 0;
            }else{
                t.status = 1;
            }
        }
        return t;
    })
    showTodo();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id != id);
    showTodo();
}
function showTodo() {
    var todo_list = document.getElementById("todo-list");
    todo_list.innerHTML = "";
    tasks.forEach(task => {
        if(task.status===0){
            todo_list.innerHTML += "<div class='task-content'><div><input class='checkbox' onchange='doneTodo("+ task.id +")' type='checkbox'>"+ task.comment + 
                "</div><div> <button onclick='deleteTask("+ task.id +")'> Delete </button><button href='#' onclick='AddTextToEditTextBox("+task.id+")'> Edit </button></div> </div>" 
        }else{
            todo_list.innerHTML += "<div class='striked task-content'><div><input class='checkbox' checked = 'true' onchange='doneTodo("+ task.id +")' type='checkbox'>"+ task.comment + 
                "</div><div><button onclick='deleteTask("+ task.id +")'> Delete </button><button href='#' onclick='AddTextToEditTextBox("+task.id+")'> Edit </button></div> </div>" 
        }
    })
}
function addTodo() {
    // let todo_list = document.getElementById('todo-list');
    let todo = document.getElementById('todo').value;
    if(todo != ''){
        tasks.push({
            id: counter+=1,
            comment: todo,
            status: 0
        })
        showTodo();
        document.getElementById('todo').value = "";
    }else{
        alert('no empty placehorder is possible');
    }
}
