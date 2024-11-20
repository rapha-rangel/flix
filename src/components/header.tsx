import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { IoSearch } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

export default function Header(){
  const [blackHeader, setBlackHeader]= useState(false);

  const scrollListiner =()=>{
    if(window.scrollY > 200){
      setBlackHeader(true)
    } else{
      setBlackHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollListiner);
    return ()=>{
      window.removeEventListener('scroll',scrollListiner);
    } 
  },[]);

  return(
    <section className={`${blackHeader? "bg-[rgba(12,12,12,0.8)]": "bg-transparent"} px-[3%] fixed opacity-100 flex py-4 items-center justify-between z-20 w-full transition-all ease-in-out duration-500`}>
      <h2 className="text-white text-5xl font-bold">FLIX</h2>
      <Navbar/>
      <div className="flex gap-8">
        <span className="text-white text-3xl"><IoSearch/></span>
        <span className="text-white text-3xl"><MdFavorite/></span>
      </div>
    </section>
  )
}