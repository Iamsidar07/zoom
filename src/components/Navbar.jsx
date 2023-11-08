import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className="bg-white w-full ">
          <nav className=" flex items-center justify-between px-6 py-3 w-full max-w-7xl mx-auto  ">
              <Link to={"/"} className="text-xl sm:text-2xl font-bold flex items-center ">
                  <img src="icon.png" alt="logo" className="w-8 h-8 object-contain" />
                  Zoom
              </Link>
              <SignedIn>
                  <UserButton />
              </SignedIn>
              <SignedOut>
                  <Link to={"/signin"}>Sign In</Link>
              </SignedOut>
          </nav>
      </header>
  )
}

export default Navbar