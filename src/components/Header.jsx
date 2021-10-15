import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Header = ({ mode, toggleThemeMode }) => (
    <div className={`header ${mode ? 'header-dark' : 'header-light'}`}>
        <div className="content">
            <div className="content-item content-item1">
               <Link style={{  textDecoration: 'inherit'}} to='/'>
                   Where in the world ?
                </Link> 
            </div>
            <div className="content-item content-item2" onClick={toggleThemeMode}>
                <span className="content-item2-icon">{mode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</span>
                {mode ? 'Light mode' : 'Dark mode'}
            </div>
        </div>
    </div>
)

export default Header