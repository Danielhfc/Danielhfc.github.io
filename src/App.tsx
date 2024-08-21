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
        <Header />


        <div className='mt-20 px-20'>
          <Introduction />
          <About />
          <Services />
          <CarouselComponent />
        </div>
    </>
  )
}

export default App
