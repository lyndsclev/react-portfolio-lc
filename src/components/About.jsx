import avatar from '../assets/avatar-profile-picture.png';
import Quote from './Quote'; 

const About = () => {
    return (
        <div>
            <div className='columns'>
                <div className='column is-3'>
                    <figure className='image is-1x1'>
                        <img className='is-rounded' src={avatar} alt='' />
                    </figure>
                </div>
                <div className='column'>
                    <div className='content'>
                        <h2>ABOUT</h2>
                        <p>With 13+ years of both agency and client-side marketing experience, I’m excited to have recently added front-end development to my skillset.</p> 
                        <p>I’m passionate about user experience-driven design and love leveraging custom CSS along with CSS frameworks such as Bootstrap and Bulma. Diving in headfirst to (and ultimately mastering!) a new CSS framework is one of my favorite challenges!</p>
                        <p>I’m strongly experienced in HTML5, CSS3, JavaScript, Express.js, React.js, Node.js, Agile methodology, and Git.</p>
                        <p>I’ve also worked with jQuery, MongoDB, MySQL, and more.</p>
                        <p>From a marketing perspective, I bring a strong project management background to the table and am an expert in automation. I believe in a data-driven approach and am strongly skilled in using both Marketo and HubSpot along with fully integrated CRM systems, including Salesforce.</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <Quote />
            </div>
        </div>
        

    ); 
}

export default About; 