import './contact.css';
import phone from '../../assets/phone.png';
import email from '../../assets/Email.png';

const Contact = () => {
    return (
        <div className='portfolio__contact' id='contact'>
            <div className='portfolio__contact-groupA'>
                <div className='portfolio__contact-groupA_heading'>
                    <h1>Get in touch</h1>
                </div>
                <div className='portfolio__contact-groupA_content'>
                    <p>I’m very approachable and
                        <br></br>would love to speak to you.
                        <br></br>Feel free to call, send me an email.
                        <br></br>Follow me in social media or simply
                        <br></br>complete the enquiry form.</p>
                </div>
                <div className='portfolio__content-groupA_contact'>
                    <div className='portfolio__content-groupA_contact-phone'>
                        <img src={phone} alt='phone'></img>
                        <span>0878877777</span>
                    </div>
                    <div className='portfolio__content-groupA_contact-email'>
                        <img src={email} alt='email'></img>
                        <span>elz@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className='portfolio__contact-groupB'>
                <div className='portfolio__contact-groupB_heading'>
                    <h1>Send me a message</h1>
                </div>
                <div className='portfolio__contact-groupB_input'>
                    <input type='text' placeholder='Name'></input>
                    <input type='email' placeholder='Email Address'></input>
                    <input type='text' placeholder='Subject'></input>

                        <textarea type='text' placeholder='Your message'></textarea >
                </div>

                <div className='portfolio__contact-groupB_btn'>
                    <button>Send message</button>
                </div>

            </div>

        </div>
    )
}

export default Contact