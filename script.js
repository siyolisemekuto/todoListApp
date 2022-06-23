//Boolean to check local storage
// localStorage.removeItem('records');
let items = JSON.parse(localStorage.getItem('records'))
? JSON.parse(localStorage.getItem('records')):[
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
        
    }
];
     
//function to show items
function showItems(){
    // itemContainer.innerHTML = "" 

//looping (will keep reshowing items)
    items.forEach(item => {
        document.querySelector('#item-wrapper').innerHTML +=`
    <li class=item>
        <input type='checkbox' class='check'>
        <span class='checkItem'>${item.item} </span>
        <span>
    </li> `
    });
    // console.table(items);
}
//check-box
function crossedOut(item) {
    if (document.querySelector('#item-wrapper').checked===true) { 
        document.querySelector('#item-wrapper').classList.add('checked');
    } else {
        document.querySElector('#item-wrapper').classList.remove('checked');
    }
}
//delete function
function deleteRecord(id) {
    if(id > -1){
        lists.splice( id, 1);
        // After delete
        localStorage.setItem('records', JSON.stringify(lists) );
    }else {
        console.log('Name was not found');
    }
}

function addItem(){
    // console.log('Hello There');
    // e.preventDefault();
    const newItem = {
        id: items.length + 1,
        item: document.querySelector('#task').value,
        dateCreated: new Date()
    
    };
    // console.log(newItem.id);
    console.log(newItem);
    items.push(newItem);
    localStorage.setItem('records', JSON.stringify(items));
    
}
showItems(); 

// Event listener
document.querySelector('#addRecord').addEventListener('click', addItem);