import { BsChevronDown } from 'react-icons/bs'
import { Category, Product } from '../interfaces/index'
import { useState } from 'react'

interface Props {
  category: Category
  products: Product[]
  toggle: () => void
}

const MenuItem = ({ category, products, toggle }: Props) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <ul className='menu__item' key={category.id}>
      <div className={`menu__itemTop ${active ? 'active' : ''}`} onClick={handleClick}>
        <a href={`/products#${category.id}`} key={category.id} onClick={toggle}>
          {category.name}
        </a>
        <button>
          <BsChevronDown />
        </button>
      </div>

      {active && (
        <ul className='menu__subItem'>
          {products.map(({ id, name }) => (
            <li key={id}>
              <a href={`/products#${category.id}-producto-${id}`} onClick={toggle}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </ul>
  )
}

export default MenuItem
