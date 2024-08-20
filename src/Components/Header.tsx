import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Header() {
    const menu = [
        {
            id: 1,
            name: "Home"
        },

        {
            id: 2,
            name: "Skills"
        },

        {
            id: 3,
            name: "Projects"
        },

        {
            id: 4,
            name: "Contact"
        }
    ]

    return (




        <div className='flex items-center fixed w-full justify-between border-b-[1px] border-black bg-[#242424] h-[90px]'>


            <div className='hidden md:flex gap-14 m-auto pl-20'>
                {menu.map((item) =>
                    <div className='cursor-pointer hover:underline font-medium text-white'>
                        <h2>{item.name}</h2>
                    </div>
                )}
            </div>

            <div className="w-[110px] flex justify-between  items-center text-[50px] mr-20">
            <span className="cursor-pointer pulse ">
                    <IoLogoGithub color="white"/>
                </span>
                <span className="cursor-pointer pulse ">
                    <IoLogoLinkedin color="white"/>
                </span>

                

            </div>

        </div>







    )
}

export default Header