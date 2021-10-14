import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

const Country = ({ mode, countries }) =>{ 
    const { alpha3Code } = useParams()
    const country = countries.find(c => c.alpha3Code === alpha3Code)
    return(
        <>
        {country && 
            <div className={`country ${mode ? 'country-dark' : 'country-light'}`}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to='/'>
                    <div className={`country-btn ${mode ? 'country-btn-dark' : 'country-btn-light'}`}>
                        <FontAwesomeIcon icon={faArrowLeft} /><span style={{paddingLeft: '1em'}}>Back</span>
                    </div>
                </Link>
                
                <div className="country-body">
                    <div className="country-body-flag">
                        <img src={`${country.flags.png}`}  className='country-body-flag-img'  alt={`${country.name}'s flag'`}/>
                    </div>
                    <div className="country-body-details">
                        <h1 className="country-body-details-head">{country.name}</h1>
                        <div className="country-body-details-info">
                            <div className="country-body-details-info-group">
                                <div className="item"><span className="item-head">Native name:</span>{country.nativeName || 'Nan'}</div>
                                <div className="item"><span className="item-head">Population:</span>{country.population || 'Nan'}</div>
                                <div className="item"><span className="item-head">Region:</span>{country.region || 'Nan'}</div>
                                <div className="item"><span className="item-head">Sub Region: </span>{country.subregion || 'Nan'}</div>
                                <div className="item"><span className="item-head">Capital: </span>{country.capital || 'Nan'}</div>
                            </div>
                            <div className="country-body-details-info-group">
                                <div className="item"><span className="item-head">Top level domain :</span>{country.topLevelDomain}</div>
                                <div className="item"><span className="item-head">Currencies : </span>
                                    {country.currencies.map((c, index) => (
                                        <span key={c.code}>
                                            {(index === (country.currencies.length-1)) ? 
                                            <span>{c.name}</span>:
                                            <span>{c.name}, </span>}
                                        </span>
                                    )) || 'Nan'}
                                </div>
                                <div className="item"><span className="item-head">Languages : </span>
                                    {country.languages.map((l, index) => (
                                        <span key={l.iso639_2}>
                                            {(index === (country.languages.length-1)) ? 
                                            <span>{l.name}</span>:
                                            <span>{l.name}, </span>}
                                        </span>
                                    )) || 'Nan'}
                                </div>
                            </div>
                        </div>
                        {   country.borders ?
                            <div className="country-body-details-borders">
                                <div className="country-body-details-borders-head">Border Countries:</div>
                                <div className="country-body-details-borders-btns">
                                    {country.borders.map(border => {
                                        const borderCountry = countries.find(c => c.alpha3Code === border)
                                        return(
                                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/${border}`} key={border}>
                                                <div className={`border-btn ${mode ? 'border-btn-dark' : 'border-btn-light'}`} key={border}>
                                                    {borderCountry.name}
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            <div className="country-body-details-borders-head"></div>
                        }
                    </div>
                </div>
                
            </div>
        }
        </>
    )
}
export default Country