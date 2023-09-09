import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { MdLocalPhone, MdMailOutline, MdLocationOn, MdAccessTime } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <h2 className='footer__logo'>Isan Seafood</h2>

        <div className='footer__redes'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <FaFacebookSquare />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <FaInstagramSquare />
          </a>
        </div>

        <div className='footer__info'>
          <a href='tel:+51666666666'>
            <MdLocalPhone />
            <span>+34 666 666 666</span>
          </a>
          <a href='mailto:correo@correo.gmail'>
            <MdMailOutline />
            <span>correo@correo.gmail</span>
          </a>
        </div>

        <div className='footer__location'>
          <p>
            <MdLocationOn />
            <span>Calle de la Piruleta, 1, 28000 Lima, Peru</span>
          </p>
          <p>
            <MdAccessTime />
            <span>Horario de atención: Lunes a Viernes de 9:00 a 18:00</span>
          </p>
        </div>
      </div>
      <p className='footer__copy'>© {new Date().getFullYear()} Isan Seafood</p>
    </footer>
  )
}

export default Footer
