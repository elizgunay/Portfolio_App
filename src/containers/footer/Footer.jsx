import './footer.css';
import home from '../../assets/home.png';
import about from '../../assets/about.png';
import skill from '../../assets/skill.png';
import contact from '../../assets/contact.png';

import instagram from '../../assets/Instagran.png';
import twitter from '../../assets/Twitter.png';
import linkedin from '../../assets/Linkedin.png';
import facebook from '../../assets/Facebook.png';
import youtube from '../../assets/Youtube.png';

import separator from '../../assets/Separator.png';




const Footer = () => {

    return (
        <div className='portfolio__footer'>
            <div className='portfolio__footer-menu'>
                <div className='portfolio__footer-menu_home'>
                    <img src={home} alt='home'></img>
                    <a href='#home'>Home</a>
                </div>
                <div className='portfolio__footer-menu_about'>
                    <img src={about} alt='about'></img>
                    <a href='#about'>About me</a>
                </div>
                <div className='portfolio__footer-menu_skill'>
                    <img src={skill} alt='skill'></img>
                    <a href='#skill'>Skills</a>
                </div>
                <div className='portfolio__footer-menu_contact'>
                    <img src={contact} alt='contact'></img>
                    <a href='#contact'>Contact</a>

                </div>
            </div>

            <div className='portfolio__footer-socialMedia'>
                <img src={instagram} alt='inst'></img>
                <img src={twitter} alt='twitter'></img>
                <img src={linkedin} alt='linkedin'></img>
                <img src={facebook} alt='facebook'></img>
                <img src={youtube} alt='youtube'></img>

            </div>
            <div className="footer_bottom">
                <div className='portfolio__footer-line'>
                    <img src={separator} alt='sep' width='100%'></img>
                </div>
                <div>
                    <p>Terms of Service - Privacy Policy</p>
                </div>
            </div>
        </div>

    )
}

export default Footer