let list1 = document.querySelector('#list1');


// list1.addEventListener('click', addList);

function addList(_name){
    this.name = _name;

    let newLi = document.createElement("li");
    newLi.className = "list-unstyled mb-4";
    newLi.innerHTML += this.name;
    newLi.innerHTML += `<i class="fa fa-check green-text ml-1"></i>`;

    listOne.appendChild(newLi);
}

addList('אוהל');
addList('נעליים');



