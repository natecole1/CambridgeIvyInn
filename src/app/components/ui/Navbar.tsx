import React from 'react'

const Navbar = () => {
    const navLinks = ['Home', 'About', 'Room', 'Contact Us']
  return (
    <div className='w-full flex justify-between p-4'>
        <div>
            <h1 className='text-yellow-500'>Cambridge Ivy Inn</h1>
        </div>
        <div className='hidden sm:flex gap-4 text-white'>
            {navLinks.map((item, id) => { 
                return(
                    <div key={`${item}-${id}`} className='cursor-pointer'>{item}</div>
                )
            })}
        </div>
        <div>
            <h2 className='text-white'>Sign In</h2>
        </div>
    </div>
  )
}

export default Navbar