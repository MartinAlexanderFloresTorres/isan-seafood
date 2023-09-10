import { useLocation } from 'react-router-dom'
import Cualidades from '../components/Cualidades'
import Product from '../components/Product'
import { categories } from '../data/categories'

const isPar = (num: number) => num % 2 === 0

const ProductsPage = () => {
  const { hash } = useLocation()

  return (
    <>
      <div className='banner__productos'>
        <h2>Productos</h2>
      </div>

      <div className='categorias__tags'>
        {categories.map(({ category }) => (
          <a
            href={`#${category.id}`}
            key={category.id}
            className={hash === `#${category.id}` ? 'active' : ''}
          >
            {category.name}
          </a>
        ))}
      </div>

      {categories.map(({ category, products }) => {
        return (
          <section
            className='categorias'
            key={category.id}
            style={{ background: isPar(category.id) ? '#f9f9f9' : '#fff' }}
            id={category.id.toString()}
          >
            <div className='categorias__top container'>
              <h2 className={hash === `#${category.id}` ? 'active' : ''}>{category.name}</h2>
              <div className='categorias__items'>
                <p>
                  <b>Nombre científico: </b>
                  <span>{category.ScientificName}</span>
                </p>
                <p>
                  <b>Capturado en: </b>
                  <span>{category.CapturedIn}</span>
                </p>
                <p>
                  <b>Procesado en: </b>
                  <span>{category.ProcessedIn}</span>
                </p>

                <p>
                  <b>Zona de Captura: </b>
                  <span>{category.CaptureZone}</span>
                </p>
              </div>
            </div>
            <div className='productos container'>
              {products.map(({ id, name, presentation, image }) => {
                return (
                  <Product
                    key={id}
                    id={id}
                    name={name}
                    categoryId={category.id}
                    presentation={presentation}
                    image={image}
                  />
                )
              })}
            </div>
          </section>
        )
      })}

      <Cualidades />
    </>
  )
}

export default ProductsPage
