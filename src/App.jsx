import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';



function App() {

  const [Todos, setTodos] = useState([])//list of todos 
  const [Todo, setTodo] = useState("")
  const [showCompleted, setShowCompleted] = useState(false)
  const [editingId, setEditingId] = useState(null); 
  
  useEffect(() => {
    const storedTodos = localStorage.getItem("Todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // ✅ Save todos to localStorage whenever Todos state changes
  useEffect(() => {
    if (Todos.length > 0) {
      localStorage.setItem("Todos", JSON.stringify(Todos));
    }
  }, [Todos]);

 
  const handleChange =(e)=>{
    setTodo(e.target.value);
  }
  const HandleAdd =()=>{
    if(Todo.trim() !== ''){
      if(editingId){
        const updatedTodos = Todos.map(item=>item.id===editingId?{...item,text:Todo}:item)
        setTodos(updatedTodos)
        setEditingId(null);
      }
      else{
        const newTodo ={id:Date.now(),text:Todo,completed:false}
        setTodos([...Todos,newTodo])//updates the todos array or appends new todo
      }
      setTodo('')//clears the input field once added successfully
      
    }
  }
  const handleDelete = (id) => {
    //this will remove the todos which matches the id and keeps the rest
    setTodos(Todos.filter(todo=>todo.id !==id))
    
  }
  const handleEdit = (id,text) => {
    // let editTodo = Todos.find(item=>item.id===id)
    // setTodo(editTodo.text)
    // setTodos(Todos.filter(todo=>todo.id !==id));
    setTodo(text);      // Populate input with the existing todo text
  setEditingId(id);
  }
  const handleCheckBox = (id) => {
   const UpdatedTodos = Todos.map(item=>item.id===id?{...item,completed:!item.completed}:item)
    setTodos(UpdatedTodos)
    
  }
  const HandleShowTodos =()=>{
    setShowCompleted(!showCompleted);
  }

  const DisplayedTodos= showCompleted?Todos.filter(item=>item.completed):Todos;
  //below code  shows completed and uncompleted todos seperately
  // const DisplayedTodos= showCompleted?Todos.filter(item=>item.completed):Todos.filter(item=>!item.completed)
  return (
    <>
      <Navbar  />
      <main className='flex justify-center'>
        <div className='container  w-[98vw] min-h-[70vh] rounded-l-2xl md:w-[50vw] bg-cyan-900 ml-2 my-4 md:rounded-xl px-3 py-2'>
          <h2 className='flex justify-center font-bold'>Todo App - Let's you manage your daily tasks</h2>
          <h2 className='font-extralight my-2'>Add a Todo</h2>
          {/* input field and save button */}
          <div className='flex justify-between gap-2 my-2'>
            <input type="text" value={Todo} onChange={handleChange} placeholder='Enter your todos...' className='w-full bg-white text-gray-500  border rounded-2xl px-3 py-1 ' />
            <button onClick={HandleAdd} className='rounded-2xl border  px-3 py-1 bg-blue-400 cursor-pointer hover:bg-blue-800 hover:font-bold'>{editingId ? "Update" : "SAVE"}</button>
          </div>
          {/* show todos */}
          <div className='flex gap-2'>
            <input type="checkbox" onChange={HandleShowTodos} checked={showCompleted} className='cursor-pointer' />
            <p>Show Finished</p>
          </div>
          {/* line break */}
          <div className='line w-[85%] h-[0.2px] my-5 bg-gray-200 mx-auto'></div>
          
         
          <h2 className='font-bold pb-2'>Your Todos</h2>
          {/* todos */}
          <div className="todos">
            {/* todo */}
            {DisplayedTodos.length===0?( <p className='text-center text-gray-300'>No Todos to show</p> ) :(DisplayedTodos.map((item)=>( 
              
            <div key={item.id} className="todo flex justify-between my-2 mx-1 gap-2">
              <div className='flex  gap-2'>
                <input type="checkbox" checked={item.completed} onChange={() =>handleCheckBox(item.id)} />
                <p className={item.completed?"line-through":""}>{item.text}</p>
              </div>
              <div className='btns flex gap-2'>
              <button onClick={()=>handleEdit(item.id,item.text)} className='rounded-2xl border  px-3 py-1 bg-blue-400 hover:bg-blue-800 hover:font-bold cursor-pointer'>Edit</button>
              <button onClick={()=>handleDelete(item.id)} className='rounded-2xl border  px-3 py-1 bg-blue-400 cursor-pointer hover:bg-blue-800 hover:font-bold'>Delete</button>
              </div>
            </div>
          )))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
