
import Image from 'next/image';

const Header = () => {
  return (
    <div className='header flex flex-col py-2 md:flex-row md:justify-between'>

      {/* Logo */}
      <div className='flex flex-row items-center'>
        <Image src='/icon.png' alt="" width={50} height={50} className='flex-grow-1' />
        <p className='flex-grow-1 text-xl font-medium'>KazTools</p>
      </div>
      
      {/* Search Bar */}
      <div className='flex flex-col justify-center m-2'>
        <div className='flex flex-row items-center relative bg-white px-2 w-fit rounded-full'>
          <input type="text" placeholder="Quickly find a tool..." className='flex-grow-1 text-black px-1 py-1 focus:outline-none rounded-full'/>
          <button className='bg-white rounded-full'><i className='fa fa-search text-black hover:opacity-50'></i></button>
        </div>

        {/* Search Suggestions */}
        <div className='flex flex-row justify-evenly search_suggestions text-sm mt-2'>
          <p>Popular now:</p>
          <button>Edit</button>
          <button>PDF</button>
          <button>Word</button>
        </div>
      </div>

      {/* Login Signup Buttons */}
      <div className='flex flex-row items-center justify-center p-2'>
        <button className='bg-green-600 w-20 h-10 p-2 mr-2 rounded-md hover:bg-green-800'>Login</button>
        <button className='bg-green-600 w-20 h-10 p-2 rounded-md hover:bg-green-800'>Sign Up</button>
      </div>

    </div>
  )
}

export default Header