import './App.css'
import { zodiac } from './data'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

function App() {
  // console.log(zodiac)
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Header name='Ryan' />
      <Main zodiacs= {zodiac} />
      <Footer year='1992' />
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  )
}

export default App
