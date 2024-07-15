import userImage from '../assets/userImage.png'

function ProfilePic() {
  return (
    <div className="fixed">
        <img src={userImage} alt="Imagem" className="h-screen object-cover" style={{
            marginTop: 91
          }}/>
    </div>
  )
}

export default ProfilePic