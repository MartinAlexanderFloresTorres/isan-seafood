const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__imagen'>
        <div className='container banner__top'>
          <h1>Isan Seafood</h1>

          <p>Ofrecemos los mejores productos del mar, frescos y de la mejor calidad.</p>
        </div>
      </div>

      <div className='banne__items'>
        <div>PASIÓN</div> <div>CALIDAD</div> <div>COMPROMISO</div>
      </div>

      <div className='banner__info'>
        <div className='container'>
          <img src='/logo.png' alt='isan seafood' />
          <div>
            <h2>Nuestra compañía</h2>
            <p>
              Asan Seafood es una empresa especialista en producción y exportación de productos del
              mar congelados que cumple íntegramente con todos los lineamientos marcados para
              proteger nuestro medio ambiente. Nuestros productos son de la más alta calidad y son
              procesados con la más alta tecnología para garantizar la satisfacción de nuestros
              clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
