import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function SideBar() {
    return (
        <div className="w-[90px] border-r-[1px] h-screen fixed flex flex-col justify-around items-center border-black">
            <h2 className='-rotate-90 tracking-widest'>Homepage</h2>
            <div className='flex flex-col gap-7 mb-10 text-[20px]'>
                <span className="cursor-pointer pulse">
                    <IoLogoGithub />
                </span>
                <span className="cursor-pointer pulse">
                    <IoLogoLinkedin />
                </span>

            </div>
        </div>
    )
}

export default SideBar