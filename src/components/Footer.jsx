import li from '../assets/icons/li-icon.png'; 
import gh from '../assets/icons/github-icon.png'; 

const Footer = () => {
    return (
        <div className='content has-text-centered'>
            <a href='https://www.linkedin.com/in/lyndseyclevesy/' target="_blank" rel="noreferrer">
                <span className='icon is-large m-2'>
                    <img src={li} alt='linkedin' />
                </span>
            </a>
            <a href='https://github.com/lyndsclev' target="_blank" rel="noreferrer">
                <span className='icon is-large m-2'>
                    <img src={gh} alt='github' />
                </span>
            </a>
        </div>
    ); 
}

export default Footer; 