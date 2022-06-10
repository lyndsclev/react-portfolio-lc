const Contact = () => {
    return (
        <div>
            <div className='content'>
                <h2>CONTACT</h2>
            </div>
            <div className='field is-horizontal'>
                <div className='field-body'>
                    <div className='field'>
                        <p className='control is-expanded'>
                            <input className='input' type='text' placeholder='Name' />
                        </p>
                    </div>
                    <div className='field'>
                        <p className='control is-expanded'>
                            <input className='input' type='text' placeholder='Email' />
                        </p>
                    </div>
                </div>
            </div>
            <div className='field is-horizontal'>
                <div className='field-body'>
                    <div className='field'>
                        <div className='control'>
                            <input className='input' type='text' placeholder='Subject' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='field is-horizontal'>
                <div className='field-body'>
                    <div className='field'>
                        <div className='control'>
                            <textarea className='textarea' placeholder='Message'></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className='field is-horizontal'>
                <div className='field-body'>
                    <div className='field'>
                        <div className='control'>
                            <button className='button is-link'>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;