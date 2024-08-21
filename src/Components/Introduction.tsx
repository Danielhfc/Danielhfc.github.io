import Strings from "../Shared/Strings"
import userImage from '../assets/userImage.jpg'

function Introduction() {
  return (
    <div className="justify-center flex-col items-center grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <h2 className="text-[70px] font-bold tracking-widest mt-5 ml-20">Daniel <br />Carvalho</h2>
        <p>{Strings.ABOUT_HEADING}</p>
      </div>


      <div className=" mt-10">
        <img src={userImage} alt="Avatar" className="h-full py-2 pr-4 ml-8 rounded-full" />
      </div>


    </div>

    

  )
}

export default Introduction