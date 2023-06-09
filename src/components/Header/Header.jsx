/** @format */
import Logo from '../../assets/images/logo.svg'
import classNames from 'classnames';

import { NavLink } from 'react-router-dom'

export const Header = () => {

    return (
        <header>


            <nav>
                <ul>
                    < ></>
                    <li></li> 
                    <li></li>
                </ul>
            </nav>


            <div className='header_wrapper'>
                <div className='header_inner'>
                    <div className='header_item_logo'>
                        <NavLink to='/'>
                            <img src={Logo} alt='logo' />
                        </NavLink>
                    </div>
                    <div className='header_item_navigation'>
                        <nav>
                            <NavLink to='/Home' className='nav_link'>
                                Homee
                            </NavLink>

                            <NavLink to='/JdmCar' className='nav_link'>
                            JDM CARS
                            </NavLink>

                            <NavLink to='/TechInfo' className='nav_link'>
                                Tech Info
                            </NavLink>

                            <NavLink to='/Store' className='nav_link'>
                                Home
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
