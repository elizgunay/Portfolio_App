import './header.css';

import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';


const Header = () => {

    return (

        <div className="portfolio__header section__padding">

            <div className='portfolio__header-image'>
                <img src={image} alt='image'></img>
            </div>

            <div className="portfolio__header-content" id='home'>

                    <h1>Creative UI Designer </h1>
                    <p>Sourasith Phomhome</p>
                    <p>Based in Montreal</p>

                <div className="portfolio__header-btn">
                    <button className='gradient1' type="button">Hire me</button>
                    <button className='gradient2' type="button">Download CV</button>
                </div>
            </div>
            <div className='portfolio__header-image2'>
                <img src={image2} alt='image'></img>
            </div>

        </div>
    )
}

export default Header