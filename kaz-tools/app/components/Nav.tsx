
const Nav = () => {
  return (
    <div className="nav flex flex-col justify-center bg-slate-900 py-2 md:flex-row">

      <div className="flex flex-grow-[8] flex-col justify-evenly md:flex-row">
        <button>Edit</button>
        <button>Convert</button>
        <button>Compress</button>
        <button>Templates</button>
        <button>Pricing</button>
        <button>More</button>
      </div>

      <div className="flex flex-grow-[2] flex-row justify-center md:justify-evenly">
        <button>Learn</button>
      </div>

    </div>
  )
}

export default Nav