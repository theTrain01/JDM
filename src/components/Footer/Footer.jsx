import Logo from '../../assets/images/logo.svg'
import './Footer.scss'
export const Footer = () => {
    return (
        <footer>
            <div className="footer_wrap">
            <div className="container">
                <div className="last_wrapper">
                    <div className="last_inner">
                    <div className="last_item">
                        <img src={Logo} alt="logo" className='logo_footer'/>
                    </div>

                    <div className="last_items">
                        <div className='info'>
                        <ul>
                            <li>OOO “AIS”</li>

                            <li>DISIGN: Luxury</li>
                            <li>DEVELOPED: Luxury</li>
                            <li>LOH IS: Luxury</li>
                        </ul>
                        </div>
                        <div className='info'>
                        <ul>
                            <li>CONTACTS</li>
                            
                            <li>E-MAIL: krintmaster@gmail.com</li>
                            <li>PHONE: 8(922) 500-26-26</li>
                            <li>LOH IS: Luxury</li>
                        </ul>
                        </div>
                        <div className='info'>
                        <ul>
                            <li>SOCIAL MEDIA</li>
                            
                            <li>INSTA: markhiev.oo4</li>
                            <li>TG: erenniga</li>
                            <li>VK: mustangggggg</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}