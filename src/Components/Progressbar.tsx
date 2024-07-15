import {useEffect, useState} from 'react'

function Progressbar() {

    const [scrollTop,setScrollTop]=useState<any>();
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return()=>window.removeEventListener("scroll", onScroll);
    },[])

    const onScroll=()=>{
        const winScroll=document.documentElement.scrollTop;

        const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

        const scrolled=(winScroll/height)*100;

        setScrollTop(scrolled);
    }

  return (
    <div className="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[91px] h-full mb-4">
    <div className="bg-green-600" style={{height:`${scrollTop}%`}}>

        </div>
    </div>
  )
}

export default Progressbar