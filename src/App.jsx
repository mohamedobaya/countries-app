import './assets/sass/App.scss'
import { ThemeProvider } from "styled-components"
import { lightMode, darkMode, GlobalStyles } from "./assets/themes"
import { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom";
import axios from 'axios'
import Header from './components/Header'
import SearchFilter from './components/SearchFilter'
import Countries from './components/Countries'
import Country from './components/Country';
const baseUrl = 'https://restcountries.com/v2/'

const App = () =>{
  const [ mode, setMode ] = useState(true) // false --> light mode, true --> dark mode
  const [ countries, setCountries ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])
  const [ continent, setContinent ] = useState('All')
  const continents = [
    'All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
]
  const toggleThemeMode = () => mode ? setMode(false) : setMode(true)

  const handeleSearchBar = event => {
    //console.log(event.target.value);
    setSearchTerm(event.target.value)
  }
  const handleContinent = event => {
    //console.log(event.target.value);
    setContinent(event.target.value)
  }

  
  useEffect(() => {
    axios
    .get(`${baseUrl}all`)
    .then(res => {
      //console.log(res.data[1]);
      setCountries(res.data)
      setSearchResults(res.data)
    })
  },[])
  useEffect(() => {
    countries && setSearchResults( countries.filter(country =>{
        const countryName = country ? country.name.toString().toLowerCase() : '' ;
        const countryContinent = country.region ? country.region.toString() : '';
        const subName = searchTerm.toString().toLowerCase() ;
        //console.log(subName);
        if(continent === 'All'){
            if(countryName.startsWith(subName))
                return country;
        }else{
            if(countryName.startsWith(subName) && continent === countryContinent)
                return country;
        }
        return ''
      })
    )
  },[searchTerm, continent])
  return(
    <ThemeProvider theme = {mode ? darkMode : lightMode}>
      <GlobalStyles />
      <Header mode={mode} toggleThemeMode={toggleThemeMode}/>
      <Switch>
        <Route path='/' exact>
          <SearchFilter mode={mode} searchTerm={searchTerm} handeleSearchBar={handeleSearchBar} continents={continents} handleContinent={handleContinent}/>
          <Countries mode={mode} countries={searchResults}/>
          
        </Route>
        <Route path='/:alpha3Code'>
          <Country mode={mode} countries={countries} />
        </Route>
        
      </Switch>
      <div className={`footer ${mode ? 'dark' : 'light' }`}>
          created by 
          <a className={`my-profile ${mode ? 'dark' : 'light' }`} href="https://www.linkedin.com/in/mohamed-obaya/">Mohamed Obaya</a>
          - 
          design by
          <a className={`${mode ? 'dark' : 'light' }`}href="https://www.frontendmentor.io/">Frontend Mentor</a>
          - 
          <a className={`${mode ? 'dark' : 'light' }`} href="https://restcountries.com/">restcountries api</a>
        </div>
    </ThemeProvider>
  )
}

export default App