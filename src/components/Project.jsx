import weather from '../assets/projects/weather.png'; 
import cape from '../assets/projects/cape-fear-tutoring.png'; 
import portfolio from '../assets/projects/css-html-portfolio.png'; 
import friendless from '../assets/projects/friendless-in-seattle.png'; 
import note from '../assets/projects/note-taker.png'; 
import disco from '../assets/projects/disco.png'; 

const Project = () => {
    return (
        <div>
            <div className='content'>
                <h2>PROJECTS</h2>
            </div>
            <div className='columns'>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                Cape Fear Tutoring
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={cape} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://capefeartutoring.com/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                Weather Dashboard
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={weather} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://github.com/lyndsclev/weather-dashboard" target="_blank" rel="noreferrer" className="card-footer-item">Repository</a>
                            <a href="https://lyndsclev.github.io/weather-dashboard/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                HTML/CSS Portfolio
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={portfolio} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://github.com/lyndsclev/portfolio-challenge" target="_blank" rel="noreferrer" className="card-footer-item">Repository</a>
                            <a href="https://lyndsclev.github.io/portfolio-challenge/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                Friendless in Seattle
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={friendless} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://github.com/Clos01/Friendless-in-seattle" target="_blank" rel="noreferrer" className="card-footer-item">Repository</a>
                            <a href="https://friendless-in-seattle.herokuapp.com/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                Note Taker
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={note} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://github.com/lyndsclev/note-taker" target="_blank" rel="noreferrer" className="card-footer-item">Repository</a>
                            <a href="https://note-taker-by-lc.herokuapp.com/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <header id='card-header' className='card-header'>
                            <p className='card-header-title'>
                                Disco at the Dungeon
                            </p>
                        </header>
                        <div className='card-image'>
                            <figure className='image is-1x1'>
                                <img src={disco} alt='' />
                            </figure>
                        </div>
                        <footer className='card-footer'>
                            <a href="https://github.com/Clos01/DND-project-" target="_blank" rel="noreferrer" className="card-footer-item">Repository</a>
                            <a href="https://dnd-character-creator1.herokuapp.com/" target="_blank" rel="noreferrer" className="card-footer-item">Deployed App</a>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Project; 