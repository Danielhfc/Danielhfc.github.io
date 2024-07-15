import './App.css'
import Header from './Components/Header'
import ProfilePic from './Components/ProfilePic'
import SideBar from './Components/SideBar'


function App() {

  return (
    <>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          User Data
        </div>
        <div>
          <ProfilePic />
        </div>
      </div>
    </>
  )
}

export default App
