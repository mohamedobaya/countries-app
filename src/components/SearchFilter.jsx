import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchFilter = ({ mode, searchTerm, handeleSearchBar, continents, handleContinent }) => {
    //---search-bar
    
    const [ arrow, setArrow ] = useState('down')
    
    const toggleArrow = () => { arrow === 'up' ? setArrow('down') : setArrow('up') }
    //---filter
    
    return(
        <div className="search-filter">
            <div className={`search ${mode ? 'search-dark' : 'search-light'}`}>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" 
                       className={`search-input ${mode ? 'search-input-dark' : 'search-input-light'}`} 
                       value={searchTerm} 
                       onChange={handeleSearchBar} 
                       placeholder='Search for a country...'/>
            </div>
            <div className={`filter ${mode ? 'filter-dark' : 'filter-light'}`} onClick={toggleArrow}>
                <select className={`filter-select ${mode ? 'filter-select-dark' : 'filter-select-light'}`}
                        defaultValue='All'
                        onChange={handleContinent}>
                    {
                        continents.map(c => <option key={c} vlaue={c}>{c}</option>)
                    }
                </select>
                <span className={`filter-arrow ${mode ? 'filter-arrow-dark' : 'filter-arrow-light'}`} >
                    {
                        arrow ==='up' ? <FontAwesomeIcon icon={faArrowUp}/> : <FontAwesomeIcon icon={faArrowDown}/>}
                </span>
            </div>

        </div>
    )
}

export default SearchFilter