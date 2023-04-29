import Link from 'next/link'

const Navbar = () => {

  return (
    <nav>
      <Link href='/'>
        <h1>
          <span className='logo-text'>todo</span>App
        </h1>
      </Link>
      <div className='nav-links'>
        <p>Welcome, Abiodun</p>
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
        <Link href='/' className='logout-btn'>
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
