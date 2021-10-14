import CountryCard from "./CountryCard"

const Countries = ({ mode, countries }) =>{
    return(
        <div className="countries">
            {
                countries.map(c => 
                    <CountryCard key={c.alpha3Code} mode={mode} country={c}/>
                )
            }
        </div>
    )
}
export default Countries