import { GrFormClose } from 'react-icons/gr'
import { categories } from '../data/categories'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

interface Props {
  active: boolean
  toggle: () => void
}

const Menu = ({ active, toggle }: Props) => {
  return (
    <div className={`menu ${active ? 'active' : ''}`}>
      <div className='menu__top'>
        <Link to={'/'} onClick={toggle}>
          <img src='/logo-texto.png' alt='logo' />
        </Link>
        <button onClick={toggle} className='btn-svg'>
          <GrFormClose />
        </button>
      </div>

      <Link className='menu__link' to={`/`} onClick={toggle}>
        Inicio
      </Link>

      <Link className='menu__link' to={`/about`} onClick={toggle}>
        Acerca De
      </Link>

      <Link className='menu__link' to={`/products`} onClick={toggle}>
        products
      </Link>

      {categories.map(({ category, products }) => (
        <MenuItem key={category.id} toggle={toggle} category={category} products={products} />
      ))}
    </div>
  )
}

export default Menu
