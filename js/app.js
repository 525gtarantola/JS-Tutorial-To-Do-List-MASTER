// CODE EXPLAINED channel
const list = document.getElementById("list");

function addToDo(toDo) {
    const text = `<li class="item">
                  <i class="co fa fa-circle-thin" job="complete"></i>
                  <p class="text"> ${toDo} </p>
                  <i class="de fa fa-trash-o" job="delete"</i>
            </li>`

    const positon = "beforeend"; 

    list.insertAdjacentHTML(position, text);
}

addToDo("Drink Coffee");