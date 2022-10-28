import Connection from "./Connection"
import Social from "./Social"
import './FooterStyles.css'


const Footer = () => {
    
  return (
    <div className='footer'>
        <Social />
        <Connection />
    </div>
  )
}

export default Footer