//Boolean to check local storage
let items = JSON.parse(localStorage.getItem('items'))
? 
//functions to generate array values
function Mathfloor(){
    const now = new Date()
}
// if (priority = "important and urgent"){
//     console.log("important and urgent");
// } else if (priority = "important but not urgent"){
//     console.log("important but not urgent")
// }
//add newItem function (CREATE)
let newItems = items
function addItem(){
    const newItem = {
        id: items.lenth+1,
        item: document.querySelector('#item').value,
        dateCreated: now,
        priority: document.querySelector('#priority').value,
        completed: document.querySelector('#completed').value
    };
    console.log(newItem);
    items.push(newItem);
    showItems(items)
}

//display on html
const itemContainer = document.querySelector('#todoItems') 
         
//function to show items
function showItems(items){
    itemContainer.innerHTML = "" 

    //looping (will keep reshowing items)
    items.forEach(item => {
    itemContainer.innerHTML +=`
    <div class=item>
         <img src=${item.image}>,
         <h5>${item.description}</h5>,
         <h6>${item.price}<h6>
    </div> `
    })
}
