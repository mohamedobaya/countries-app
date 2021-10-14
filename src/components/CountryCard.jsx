import { Link } from 'react-router-dom'

const CountryCard = ({ mode, country }) =>{ 
    
      
    return(
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/${country.alpha3Code}`}>
            <div className={`card ${ mode ? 'card-dark' : 'card-light'}`} >
                <div className="card-flag">
                    <img src={`${country.flags.png}`}  className='card-flag-img'  alt={`${country.name}'s flag'`}/>
                </div>
                <div className="card-body">
                    <h3 className="card-body-title">{country.name}</h3>
                    <div className="card-body-item"><span className="card-body-item-head">Population:</span>{country.population || 'Nan'}</div>
                    <div className="card-body-item"><span className="card-body-item-head">Region:</span>{country.region || 'Nan'}</div>
                    <div className="card-body-item"><span className="card-body-item-head">Capital:</span>{country.capital || 'Nan'} </div>
                </div>
            </div>
        </Link>
    )
}
export default CountryCard