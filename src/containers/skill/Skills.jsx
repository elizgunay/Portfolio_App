import './skills.css';
import { HiCheckCircle } from "react-icons/hi";


const Skills = () => {
    return (
        <div className='portfolio__skill' id='skill'>

            <div className='portfolio__skill-container1'>
                <div className='portfolio__skill-container1_heading'>
                    <h1>Frontend Development</h1>
                </div>

                <div className='portfolio__skill-container1_content'>
                   <p><HiCheckCircle/> HTML</p>
                    <p><HiCheckCircle/> CSS</p>
                    <p><HiCheckCircle/> JS</p>
                    <p><HiCheckCircle/> Bootstrap</p>
                    <p><HiCheckCircle/> React JS</p>
                    <p><HiCheckCircle/> Git</p>
                </div>

            </div>

            <div className='portfolio__skill-container2'>
                <div className='portfolio__skill-container2_heading'>
                    <h1>Backend Development</h1>
                </div>

                <div className='portfolio__skill-container2_content'>
                    <p><HiCheckCircle/> C#</p>
                    <p><HiCheckCircle/> Java</p>
                    <p><HiCheckCircle/> SQL</p>
                    <p><HiCheckCircle/> ASP.NET</p>
                    
                </div>
            </div>

            <div className='portfolio__skill-container3'>
                <div className='portfolio__skill-container3_heading'>
                    <h1>UI/UX Design</h1>
                </div>
                <div className='portfolio__skill-container3_content'>
                    <p><HiCheckCircle/> Figma</p>
                    <p><HiCheckCircle/> Photoshop</p>
                    
                </div>
            </div>

            </div>

    )
}

export default Skills