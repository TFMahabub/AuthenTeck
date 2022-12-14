import { useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "./UserContext"

const Navbar = () => {

  const {logOut, user} = useContext(AuthContext)
  // const Navigate = useNavigate()


  const handleLogOut = () =>{
    logOut()
    .then(result => {
      console.log();
      Navigate('/login')
    })
    .catch(error => console.error(error))
  }

  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to={'/'}
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-gray-900 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>AuthenTech</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to={'/'} className='mr-5 hover:text-gray-900'>
            Home
          </Link>

          <Link to={'/profile'} className='mr-5 hover:text-gray-900'>
            Profile
          </Link>
          <Link to={'/wallet'} className='mr-5 hover:text-gray-900'>
            Wallet
          </Link>
          {
            user?.uid ?
            <button onClick={handleLogOut} className='mr-5 hover:text-gray-900'>
              Logout  
            </button>
            :
            <>
            <Link to={'/register'} className='mr-5 hover:text-gray-900'>
              Register
            </Link>
            <Link to={'/login'} className='mr-5 hover:text-gray-900'>
              Login
            </Link>
            </>
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar
