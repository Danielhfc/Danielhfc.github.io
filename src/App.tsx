import './App.css'
import About from './Components/About'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import ProfilePic from './Components/ProfilePic'
import SideBar from './Components/SideBar'


function App() {

  return (
    <>
      <Header/>
      <SideBar/>
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction/>
          <About/>
        </div>
        <div className='hidden md:block'>
          <ProfilePic />
        </div>
      </div>
      
    </>
  )
}

export default App
