
import Image from "next/image";

const Footer = () => {

  return (
    <div className="mt-2 p-2">

      <div className='flex p-1 m-2 border-b border-blue-200'>
        <p className="mr-5">Follow us</p>
        <button><i className='fa fa-youtube-play mr-5'></i></button>
        <button><i className='fa fa-instagram mr-5'></i></button>
        <button><i className='fa fa-facebook-f'></i></button>
      </div>

      <div className="footer-elements flex flex-row justify-evenly p-2 m-2">

        <div>
          <p className="text-center font-bold ">KazTools</p>
          <ul className="list-none">
            <button>History</button>
            <button>Popular Searches</button>
            <button>License</button>
            <button>Tools</button>
          </ul>
        </div>

        <div>
          <p className="text-center font-bold">Blog</p>
          <ul className="list-none">
            <button>Web Design</button>
            <button>Marketing</button>
            <button>Video Editing</button>
            <button>Explore Blog</button>
          </ul>
        </div>

        <div>
          <p className="text-center font-bold">Help</p>
          <ul className="list-none">
            <button>Help Center</button>
            <button>Become an affiliate</button>
          </ul>
        </div>

        <div>
          <p className="text-center font-bold">Developer</p>
          <ul className="list-none">
            <button>Become a Developer</button>
            <button>Developer Sign In</button>
          </ul>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-2 mb-1 border-t border-blue-200">
        <div className="flex items-center flex-grow-[7]">
          <Image src='/icon.png' alt="" width={50} height={50} className='flex-grow-1' />
          <p className='flex-grow-1 text-xl font-medium'>KazTools</p>
        </div>

        <div className="flex justify-evenly flex-grow-[3] text-sm">
          <button>Privacy Policy</button>
          <button>Terms and conditions</button>
          <button>Cookies Policy</button>
          <button>About us</button>
          <button>Contact</button>
        </div>
      </div>

      <div className="text-center mb-3"><p>&copy; Developed by Yamin K.</p></div>

    </div>
  )
}

export default Footer