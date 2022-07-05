import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-screen p-6 bg-slate-300'>
        {/* for tablet and dexktop */}
        <div className='hidden md:flex bg-red-600 p-4 w-full h-full'>

        </div>
        {/* for mobile */}
        <div className='flex md:hidden p-4 w-full h-full bg-blue-500'>

        </div>
    </div>
  )
}

export default Header