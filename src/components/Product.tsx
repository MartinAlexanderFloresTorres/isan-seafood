import { useLocation } from 'react-router-dom'

interface Props {
  id: number
  name: string
  presentation: string
  image: string
  categoryId: number
}

const Product = ({ id, categoryId, name, presentation, image }: Props) => {
  const { hash } = useLocation()

  return (
    <article
      className={`producto ${hash === `#${categoryId}-producto-${id}` ? 'active' : ''}`}
      id={`${categoryId}-producto-${id}`}
    >
      <img loading='lazy' src={image} alt={name} />
      <h2>{name}</h2>
      <p>{presentation}</p>
    </article>
  )
}

export default Product
