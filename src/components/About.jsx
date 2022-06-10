import avatar from '../assets/avatar-profile-picture.png';

const About = () => {
    return (
        <div className='columns'>
            <div className='column is-3'>
                <figure className='image is-1x1'>
                    <img className='is-rounded' src={avatar} alt='' />
                </figure>
            </div>
            <div className='column'>
                <div className='content'>
                    <h2>ABOUT</h2>
                    <p>LC is a digital marketing professional turned coder living in the great town of historic downtown Wilmington, NC. She loves puppers and all things related to donuts... Well, really just eating them.</p>
                    <p>Her front-end development skillset includes: HTML, CSS, JavaScript, React, Node, Express, Bulma, Bootstrap, and the list goes on.</p>
                </div>
            </div>
        </div>
    ); 
}

export default About; 