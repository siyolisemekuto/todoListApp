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

    document.querySelector('#item-wrapper').innerHTML = '';
//looping (will keep reshowing items)
    items.forEach((item,index) => {
        document.querySelector('#item-wrapper').innerHTML +=`
    <li class=item>
        <input type='checkbox' class='check'>
        <span class='checkItem'>${item.item}</span>  
        <i id=edit type='button' onClick='editItem(${item})' class="fa-solid fa-pen"></i>
        <i  id='delete' onclick='deleteRecord(${index})' class="fa-solid fa-circle-minus"></i>    
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
        items.splice(id, 1);
    }
   localStorage.setItem('records', JSON.stringify(items));
   showItems();
}
//edit function
function editItem(item){
    const editItem = {
        id: items.length + 1,
        item: document.querySelector('#task').value,
        dateCreated: new Date()
    };
    console.log(editItem);
    items.push(editItem);
    localStorage.setItem('records', JSON.stringify(items)); 
}

function addItem(){
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

//sort-by functionality
document.querySelector('#sorting').addEventListener('click', ()=> {
    items.sort( (a, b)=> {
        return (a.item < b.item) ? -1: 0;
    });
    // Save new data to the localstorage
    localStorage.setItem('records', JSON.stringify(items));
    readItems();
});