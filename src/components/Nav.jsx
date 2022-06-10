export default function Nav ({setCurrentPage}) {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-menu is-active'>
                <div className='navbar-start'>
                    <p className='navbar-item title is-4'>LYNDSEY CLEVESY</p>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>    
                            <button className='button is-link is-inverted' onClick={() => {setCurrentPage('about');}}>ABOUT</button>
                            <button className='button is-link is-inverted' onClick={() => {setCurrentPage('projects');}}>PROJECTS</button>
                            <button className='button is-link is-inverted' onClick={() => {setCurrentPage('contact');}}>CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    ); 
}; 