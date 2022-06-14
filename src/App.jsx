import { useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputFind from './components/InputFind'
import LocationInfo from './components/LocationInfo'
import useLocation from './hooks/useLocation'

function App() {

  const [searchLocation, setSearchLocation] = useState()
   
  const location = useLocation(searchLocation)
  
 
  return (
    <div className="App">
      <InputFind setSearchLocation={setSearchLocation}/>
      <LocationInfo  location={location}/>
      <div className='Cards'>
        {location?.residents.map(resident => (
          <CardCharacter  resident = {resident} key={resident}/>
        ))}
      </div>
    </div>
  )
}

export default App
