import About from '../components/About'
import Galeria from '../components/Galeria'
import Proteccion from '../components/Proteccion'
import Servicios from '../components/Servicios'

const AboutPage = () => {
  return (
    <>
      <div className='banner__about'>
        <h2>Acerca De Isan SeaFood</h2>
      </div>

      <Servicios />
      <About />
      <Proteccion />
      <Galeria />
    </>
  )
}

export default AboutPage
