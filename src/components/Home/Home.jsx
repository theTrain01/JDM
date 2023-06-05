/** @format */

import './Home.scss'

import slideImg from '../../assets/images/supraSlider 1.jpg'
import slideImg1 from '../../assets/images/chaser 1.jpg'
import slideImg2 from '../../assets/images/supraSlider 1.jpg'
import imagesCar from '../../assets/images/silvia.jpg'
import { HeaderBlock } from '../Header/HeaderBlock'


export const Home = () => {
    return (
        <>
            <HeaderBlock/>
            <section className='cars'>
                <div className='container'>
                    <div className='text_cars'>
                    <h3>
                        They are hard to find, easy to lose and impossible to forget. No,
                        it's not about girls. We are now talking about cars. Models such as
                        Toyota Chaser, the legendary Toyota Crown and Mark II, Subaru
                        Impreza and Mitsubishi Lancer, back in the late 90s and early 2000s,
                        filled the roads of the Far East and Siberia everywhere and were
                        often found in the central regions. Today they are considered almost
                        collectible cars. Love for them spawned a whole movement called JDM.
                        This abbreviation stands for Japanese Domestic Market, which
                        translates as "Japanese domestic market." JDM - cars are
                        distinguished by expressive body kits, low ground clearance and
                        top-end equipment.
                    </h3>
                    </div>
                </div>

                <div className='slider_cars'>
                    <div className='slider_inner'>
                    <div className='slider_item'>
                        <img src={slideImg} alt='img slider' />
                    </div>

                    <div className='slider_item'>
                        <img src={slideImg1} alt='img slider' />
                    </div>

                    <div className='slider_item'>
                        <img src={slideImg2} alt='img slider' />
                    </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='desription_cars'>
                    <div className='description_cars_inner'>
                        <div className='description_cars_item_text'>
                        <p className='text_cars'>
                            It is worth once and for all to part with the illusion that a
                            used Mark of the 90s or an Impreza with a full package of
                            documents and without a run in the Russian Federation can be
                            purchased straight from Japan for 200,000 rubles. The stereotype
                            “the older the car, the cheaper” does not work here. The
                            subtleties of Russian customs legislation make it possible to
                            import into our country under full duty only cars not older than
                            2009, or rare cars whose age has exceeded 30 years. JDM legends,
                            alas, do not fall into this category.
                        </p>
                        </div>

                        <div className='description_cars_item'>
                        <img src={imagesCar} alt='car' />
                        </div>
                    </div>

                    <div className='text_cars_last'>
                        <p>
                        You can bring them only in the form of a saw cut or a designer,
                        but the law will not allow you to move around in such a car, and
                        the price tag for a car will not please you with democracy. As a
                        rule, designers are acquired by true JDM fans who do not mind the
                        means to fulfill their dreams, or as donors for their own cars. We
                        will be happy to tell you about these cars in more detail!
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};
