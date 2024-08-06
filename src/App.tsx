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
    
      <Header/>
      <SideBar/>
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction/>
          <About/>
          <Services/>
          <CarouselComponent/>
        </div>
        <div className='hidden md:block'>
          <Progressbar/>
          <ProfilePic />
        </div>
      </div>
    
      
    </>
  )
}

export default App
