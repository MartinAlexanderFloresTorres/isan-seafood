import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LuMenu } from 'react-icons/lu'
import Menu from './Menu'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const { pathname } = useLocation()

  const handleMenu = () => {
    setMenu(!menu)
  }

  const cerrarMenu = () => setMenu(false)

  return (
    <header className='header'>
      <div className='container'>
        <Link className='logo' to='/' onClick={cerrarMenu}>
          <img className='logo__img' src='/logo.png' alt='Isan Seafood' />
        </Link>

        <div className='header__right'>
          <nav className='header__navegacion'>
            <Link to='/' className={pathname === '/' ? 'active' : ''} onClick={cerrarMenu}>
              Inicio
            </Link>
            <Link
              to='/about'
              className={pathname === '/about' ? 'active' : ''}
              onClick={cerrarMenu}
            >
              Acerca De
            </Link>
            <Link
              to='/products'
              className={pathname === '/products' ? 'active' : ''}
              onClick={cerrarMenu}
            >
              Productos
            </Link>
          </nav>

          <button className='btn-svg' onClick={handleMenu}>
            <LuMenu />
          </button>
        </div>
      </div>

      <Menu active={menu} toggle={handleMenu} />
    </header>
  )
}

export default Header
