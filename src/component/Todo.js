import React, {useState, useEffect} from 'react'
 import "./style.css"
 // add local storage
 const getLocalData = () =>{
  const lists = localStorage.getItem("mytodolist");
  if(lists){
    return JSON.parse(lists)
  }else{
    return [];
  }
 }
 

function Todo() {
  const[inputdata, setInputData] = useState("")
  const [items, setItems] = useState(getLocalData());
  const[isEditItem, setIsEditItem] = useState("")
  const[toggleButton, setToggleButton] = useState(false)
  // add function
 const additems=()=>{
  if(!inputdata){
    alert("plz add item")
  } else if (inputdata && toggleButton) {
    setItems(
      items.map((curElem) => {
        if (curElem.id === isEditItem) {
          return { ...curElem, name: inputdata };
        }
        return curElem
    })
    )
    setInputData("");
    setIsEditItem(null);
    setToggleButton(false);
  }
  else{
    const myNewInputData = {
      id:new Date().getTime().toString(),name:inputdata,
    }
    setItems([...items, myNewInputData])
    //use for clean input text area
    setInputData(" ")
  }
   
 }
 // how to edit
 const editItem = (index) => {
  const item_todo_edited = items.find((curElem) => {
    return curElem.id === index;
  });
  setInputData(item_todo_edited.name);
  setIsEditItem(index);
  setToggleButton(true);
};
 
//  how to delete items
 const deleteItem = (index) =>{
  const updatedItem = items.filter((curElem) => {
    return curElem.id !== index;
  })
 
  setItems(updatedItem)
 } 
   // remove items
   const removeAll = ()  =>{
    setItems([ ])
  }
  // adding local storage
  useEffect(() => {
   localStorage.setItem("mytodolist", JSON.stringify(items))
  }, [items])
  
  return (
    <>
    {/* main div all part create here */}
<div className="main-div">
  {/* this div for images */}
  <div className="child-div">
    <figure>
    {/* ./images/todo.svg for getting data from public images folder */}
      <img src="./images/todo.svg" alt="todo logo" />  
      <figcaption>Add Your List Here ✌</figcaption>        
    </figure>
    <div className="addItems">
      <input type="text" placeholder='✍ Add Item' className='form-control'  value={inputdata} onChange={(event) => setInputData(event.target.value)}/>
      {toggleButton? <i class="  far fa-edit add-btn" onClick={additems}></i>: <i class=" fa fa-plus add-btn" onClick={additems}></i>}
     
    </div>
    {/* show our item */}
   <div className="showItems">
    {/* map function */}
   {items.map((curElem)=>{
    return(
      <div className="eachItem" key={curElem.id}>
      <h3>{curElem.name}</h3> 
      <div className="todo-btn">
      <i class=" far fa-regular fa-edit add-btn"onClick={() => editItem(curElem.id)}></i>
      <i class=" far fa-regular fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
      </div>
    </div>
    )
   })}
   </div>
   {/* remove all button */}
    <div className="showItems">
      <button className='btn effect04'data-sm-link-text="REMOVE ALL" onClick={removeAll}> <span>CHECKLIST</span></button>
    </div>


  </div>
   
</div>

    </>
  )
}


export default Todo