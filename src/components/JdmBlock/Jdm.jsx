import {Header} from '../Header/Header'


import imgSupra from '../../assets/images/supra.gif'
import imgSupra1 from '../../assets/images/supraBack 1.jpg'

import skyImg from '../../assets/images/skyline 1.jpg'
import skyImg1 from '../../assets/images/skylineFront 1.jpg'
import skyImg2 from '../../assets/images/skylineBack 1.jpg'
import subImg1 from '../../assets/images/subaru.jpg'
import subImg2 from '../../assets/images/subaruBack 1.jpg'

import './Jdm.scss'

export const JdmBlock = () => {
    return (
        <>
            <section className='view_cars_block'>
                <div className="block_one">
                    <Header/>
                    <div className="container">
                        <div className="block_car">
                        <div className="block_item">
                            <div className='box_image'>
                                <img src={imgSupra} alt="Images" />

                                <ul>
                                <li>Body: JZA80</li>
                                <li>Engine: 2JZ (3 l., 255 h.p.)</li>
                                <li>Drive: rear</li>
                                </ul>
                            </div>

                            <div className='description_car'>
                                <h2>TOYOTA SUPRA</h2>
                                <p>
                                Power plants. Under the hood of the Supra is the legendary 2JZ. This is an engine that had no equal: omnivorous, unpretentious, capable of any overload and serious tuning. With a volume of 3 liters, it produces up to 225 hp, but this is not the limit: the craftsmen are rocking "gisettes" and up to 1000 "horses"
                                </p>
                            </div>
                        </div>

                        <div className="block_item">
                            <div className='box_image'>
                                <img src={imgSupra1} alt="Images" />

                                <ul>
                                <li>Transmission: MKPP 6</li>
                                <li>Consumption l/100 km: 11.5</li>
                                </ul>
                            </div>

                            <div className='description_car'>
                                <h2>The legend of "Fast and the Furious"</h2>
                                <p>
                                The fourth generation Supra appeared in 1993 under the slogan "The Sport of Toyota". It was on such a car that the performer of one of the main roles in the film "Fast and the Furious", Paul Walker, drove. It was later sold at auction for $40 million.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block_two'>
                <div className="container">
                <div className='car_two_item'>
                    <h2>NISSAN SKYLINE</h2>

                    <p>
                        The Nissan Skyline GT-R series has become a cult car all over the world. At the time of its release in 1998, this sports car had no equal: the Rock became a kind of miracle of Japanese engineering.
                    </p>

                    <ul>
                        <li> <span>Salon.</span> 
                        Three-spoke steering wheel, aluminum pedals, large speedometer and tachometer with metal trim: everything here is designed for unrestrained street racing.
                        </li>
                        <li> <span>Power plants. </span> 
                        In the R-34 version, an in-line 6-cylinder engine with a volume of 2568 cc was installed. The engine produced 280 hp. with twin turbocharging.
                        </li>
                        <li> <span>Technologies. </span>  
                        The GT-R series met the highest safety standards at the time of its release. The model received a reinforced body with increased rigidity, an improved manual transmission from GETRAG, intercooler temperature sensors and other options. There was a monitor in the cabin, which reflected the temperature and level of oil, coolant, data from sensors of longitudinal and transverse rolls.
                        </li>
                    </ul>
                </div>
                </div>

                <div className='sky_box'>
                    <div>
                    <img src={skyImg} alt="Images" className='skyBlock' />
                    </div>
                    <div className='inner_sky'>
                        <div>
                        <img src={skyImg1} alt="Images" />
                        </div>
                        <div>
                        <img src={skyImg2} alt="Images" />
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="block_car">
                        <div className="block_item">
                            <div className='box_image'>
                                <img src={subImg1} alt="Images" />

                                <ul>
                                <li>Transmission: MT 5</li>
                                <li>Consumption l/100 km: 9.6</li>
                                </ul>
                            </div>

                            <div className='description_car'>
                                <h2>SUBARU IMPREZA</h2>
                                <p>
                                The first Imprezas, which appeared in 1992, stood out from other sedans with all-wheel drive and a proprietary boxer. By 1996, the concern was faced with the task of creating the fastest sports car for mass production. Thousands of fans around the world believe that Subaru succeeded
                                </p>
                            </div>
                        </div>

                        <div className="block_item">
                            <div className='box_image'>
                                <img src={subImg2} alt="Images" />

                                <ul>
                                <li>Body: GC8</li>
                                <li>Engine: EJ20 (2 HP, 280 HP)</li>
                                <li>Drive: full (4WD)</li>
                                </ul>
                            </div>

                            <div className='description_car'>
                                <h2>Built for Speed</h2>
                                <p>
                                Power plants. The heart of the car is the legendary boxer engine with a working volume of 2 liters, demonstrating 280 hp. It is easy to swipe and can withstand even space loads.Technologies. The model was equipped with a sports suspension, disc brakes in a circle and an ABS system.
                                </p>
                            </div>
                        </div>
                        </div>
                        </div>
            </section>
        </>
    )
}