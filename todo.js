let todolist = [
    {
        item :"buy milk" ,
        dueDate:'11/06/2025' },
    {
        item :"go to college",
        dueDate:'11/06/2025'}
]

displayItems()

function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let todoItem = inputElement.value;
    let dateElement = document.querySelector("#todo-date");
    let tododate = dateElement.value;
    todolist.push({item:todoItem,dueDate:tododate});
    inputElement.value = ""
    dateElement.value = ""
    displayItems()
}

function displayItems() {
    let containerElement = document.querySelector(".todocontainer");

    let newHtml = ""

    for (i = 0; i < todolist.length; i++) {

        let item = todolist[i].item;
        let dueDate = todolist[i].dueDate;


        newHtml += `
        
         <span> ${item}</span>
         <span> ${dueDate}</span>
        <button class="btn-delete" onclick="todolist.splice(${i},1) 
        displayItems()">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}