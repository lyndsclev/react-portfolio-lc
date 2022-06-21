import { useState } from 'react'; 
import emailjs from 'emailjs-com'; 

const Contact = () => {

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [message, setMessage] = useState(''); 
    const [emailSent, setEmailSent] = useState(false); 

    const submit = () => {
        if (name && email && message) {
        
            const serviceId = 'service_0wkrqjr'; 
            const templateId = 'template_fj5f7c6'; 
            const userId = 'lepU3VsqhPm2KaKjR'; 
            const templateParams = {
                name, 
                email, 
                message
            }; 

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error)); 

            setName(''); 
            setEmail(''); 
            setMessage(''); 
            setEmailSent(true); 

            alert('Thank you for your message! I will be in touch soon.'); 
            
        } else {
            alert('Please fill in all fields.'); 
        }
    }

    return (
        <div>
            <div className='content'>
                <h2>CONTACT</h2>
            </div>
            <div id="contact-form">
                <div className='field is-horizontal'>
                    <div className='field-body'>
                        <div className='field'>
                            <div className='control'>
                                <input className='input' type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                  <div className='field is-horizontal'>
                    <div className='field-body'>
                        <div className='field'>
                            <div className='control'>
                                <input className='input' type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='field is-horizontal'>
                    <div className='field-body'>
                        <div className='field'>
                            <div className='control'>
                                <textarea className='textarea' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='field is-horizontal'>
                    <div className='field-body'>
                        <div className='field'>
                            <div className='control'>
                                <button onClick={submit} className='button is-link'>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;