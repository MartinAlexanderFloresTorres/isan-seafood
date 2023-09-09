interface Props {
  id: number
  name: string
  presentation: string
  image: string
  categoryId: number
}

const Product = ({ id, categoryId, name, presentation, image }: Props) => {
  return (
    <article className='producto' id={`${categoryId}-producto-${id}`}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{presentation}</p>
    </article>
  )
}

export default Product
