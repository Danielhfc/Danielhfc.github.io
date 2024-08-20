import './App.css'
import About from './Components/About'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import ProfilePic from './Components/ProfilePic'
import Progressbar from './Components/Progressbar'
import Services from './Components/Services'
import SideBar from './Components/SideBar'
import CarouselComponent from './Components/CarouselComponent'


function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      
      <div className='pt-10'>
        <Introduction />
        <About />
        <Services />
        <CarouselComponent />
      </div>
      


    </>
  )
}

export default App
