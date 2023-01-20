//"rafce" this is a shortcut for
import React, {useState} from 'react'
import "./style.css"

const Todo1 = () => {
    // make state for getting input and store in state
    const [inputdata, setInputData] = useState(" ")
    // another state for storeing current and previous state
    // passing empty array
    const [items, setItems] = useState([])
    // additem function
    const addItem = () =>{
        if(!inputdata){
            alert("plz add")
        } else{
                const myNewInputData = {
                  id:new Date().getTime().toString(),name:inputdata,
                }
            setItems([...items, myNewInputData])
            // for removing previous data keep input text clear
            setInputData("")
        }
    }
    // how to delete item
    const deleteItem = (index) =>{
        const updatedItem = items.filter((curElem) => {
          return curElem.id !== index;
        })
       
        setItems(updatedItem)
       } 
       //remove all items
       const RemoveAll = () =>{
        setItems([])
       }
   
   

  return (
    //"<></>" this is js fragment
    <>
  
<div className="main-div">
    {/* create child div for img and captain */}
    <div className="child-div">
        <figure>
            <img src="./images/todo.svg" alt="todo logo" />
            <figcaption>
                {/* // for imoji "window button + . */}
                Add Your List Here✌ 
            </figcaption>
        </figure>
        {/* create "add-items " div for input window */}
            {/* placeholder are used for show default text in input */}
             {/* "<i class=" fa fa-solid fa-plus"></i>" this is add from fontawsome for addin "+" sign firnt using 
             icon we should import link in "public-index.html flie" then we can use */}
             <div className="addItems">

            <input type="text" placeholder='✍ Add Items' className='form-control' value={inputdata} onChange={(event)=>setInputData(event.target.value)}/><i class=" fa fa-solid fa-plus" onClick={addItem}></i>
            </div>
              {/* all button remove */}
            {/* show items"mainly anothetrr div for store item */}
            <div className="showItems">
                {/* make loop for showing data */}
                {items.map((curElem, index)=>{
                    return(
                        <div className="eachItem" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn"><i class=" far fa-solid fa-edit"></i>
                    <i class=" far fa-regular fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                    </div>
                </div>

                    )
                })}
                
            </div>


            
            <div>
            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove" onClick={RemoveAll}><span>Check list</span></button>
                </div>
            </div>
            
        

    </div>  
</div>
    </>
  )
}

export default Todo1