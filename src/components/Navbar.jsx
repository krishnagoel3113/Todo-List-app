import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full'>
    <div className='navbar flex justify-between px-2 py-3 items-center text-xl'>
        <div className="logo cursor-pointer  p-2  ">Todo App</div>
        <div className="items ">
            <ul className='flex  gap-5 p-2'>
                <li className='cursor-pointer hover:underline '>Home</li>
                <li className='cursor-pointer hover:underline'>Your Todos</li>
            </ul>
        </div>
    </div>
    </nav>

  )
}

export default Navbar