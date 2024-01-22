import './about.css';
import confident from '../../assets/confident.png';
import illustration from '../../assets/Illustration.png';

const About = () => {

    return (

        <div className='portfolio__about section__margin' id='about'>
            <div className='portfolio__about-frame'>
                <div className='portfolio__about-frame_illustration'>
                   <img src={confident} alt='confident'></img>
                </div>
                <div className='portfolio__about-content'>
                    <h1>About me</h1>
                    <p>My name is Sourasith Phomhome. 
                        <br></br>I’m a UI Designer and a instrutor
                        <br></br> based in Montreal.
                    <br></br>I’m curently working with Design+Code.
                    <br></br> I’m passionate about creating digital 
                    <br></br>experiences and teaching design.
                    <br></br>My goal is to help beginners to grow 
                    <br></br>their skills... <span class="read-more">read more</span></p>
                </div>
            </div>

            {/* <div className='portfolio__about-illustration'>
                <img src={illustration} alt='img'></img>

            </div> */}


        </div>

    )
}

export default About