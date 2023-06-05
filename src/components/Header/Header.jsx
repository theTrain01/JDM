/** @format */
import Logo from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <div className='header_wrapper'>
                <div className='header_inner'>
                    <div className='header_item_logo'>
                        <Link to = '/'>
                            <img src={Logo} alt='logo' />
                        </Link>
                    </div>
                    <div className='header_item_navigation'>
                        <nav>
                            <Link to = '/Home' className='nav_link'>
                                Home
                            </Link>

                            <Link to = '/JdmCar' className='nav_link'>
                                JDM CARS
                            </Link>

                            <Link to = '/TechInfo' className='nav_link'>
                                Tech Info
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
