import { useState } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  id: number
  name: string
  presentation: string
  image: string
  categoryId: number
}

const Product = ({ id, categoryId, name, presentation, image }: Props) => {
  const [isLoad, setIsLoad] = useState(false)

  const { hash } = useLocation()

  return (
    <article
      className={`producto ${hash === `#${categoryId}-producto-${id}` ? 'active' : ''}`}
      id={`${categoryId}-producto-${id}`}
    >
      <div className='placeholder'>
        <img
          src={image}
          alt={name}
          style={{ opacity: isLoad ? 1 : 0 }}
          onLoad={() => setIsLoad(true)}
        />
        {!isLoad && <div className='loader'></div>}
      </div>

      <h2>{name}</h2>
      <p>{presentation}</p>
    </article>
  )
}

export default Product
