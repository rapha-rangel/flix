import Image from "next/image";
import { newMovieOrEpisode } from "../app/utils/new-movie-episode";
import FolderHighlightsCard from "./folder-highlights-card";
import { useRef, useState } from "react";
import ArrowButton from "./arrow-button";

interface HighlightsRowProps {
  popularMovies: any
  title:string
  hasFavoriteList: boolean
}

export default function HighlightsRow ({popularMovies, title, hasFavoriteList}:HighlightsRowProps){
  const arrow = useRef<HTMLInputElement | null>(null);
  const [selectRadio, setSelectRadio] = useState(0);

  const handleChangeArrow =(position: string)=>{
    const rangeOfCarousel = popularMovies.length -1;
    if(arrow.current){
      if(position ==="left"){
        if(arrow.current?.scrollLeft === 0){
          setSelectRadio(0);
        }else{
          arrow.current.scrollLeft -= arrow.current.offsetWidth;
          setSelectRadio(prev=>prev-1);
        }
      } else{
        if(arrow.current?.scrollLeft >= arrow.current.offsetWidth*rangeOfCarousel){
          setSelectRadio(rangeOfCarousel);
        }else{
          arrow.current.scrollLeft += arrow.current.offsetWidth;
          setSelectRadio(prev=>prev+1);
        }
      }
    }
  }

  return(
    <section className={`
    ${title ==="filmes" && hasFavoriteList===false ?"bg-gradient-to-b from-[rgba(12,12,12,1)] from-20% to-[rgba(0,0,0,0)] to-80%"
    :""} flex flex-col `}>
      <div className="flex items-center gap-6 px-8 z-10">
        <div className="flex text-[7rem] text-outline-blue uppercase font-semibold [text-shadow:_-10px_0px_9px_rgba(12,12,12,1)] text-[rgba(12,12,12,1)] ">
          <h3 className=" tracking-[-1rem]">t</h3>
          <h3 className="tracking-[-1rem]">o</h3>
          <h3>p</h3>
        </div>
        <div className="flex text-[7rem] text-outline-blue uppercase font-semibold [text-shadow:_-10px_0px_9px_rgba(12,12,12,1)] text-[rgba(12,12,12,1)] ">
          <h3 className="tracking-[-1.5rem]">1</h3>
          <h3>0</h3>
        </div>
      <div className=" uppercase text-white text-lg shadow-[-6px_0px_8px_rgba(12,12,12,1)] ">
          <p className=" tracking-[1rem]">{title}</p>
          <p className="tracking-[1rem]">de hoje</p>
      </div>
      </div>
      <div className="flex group relative">
        <div className="flex gap-3 w-full z-10 overflow-hidden scroll-smooth" ref={arrow}>
          {popularMovies && popularMovies.map((item: any, index: number)=>(
            <FolderHighlightsCard
              index={index}
              item={item}
              key={index}
            />
          ))}
        </div>
        <ArrowButton
          selectRadio={selectRadio} 
          arrayLength={(popularMovies.length/5)}
          handleChangeArrow={handleChangeArrow}
          position={"left"}
        />
        <ArrowButton
          selectRadio={selectRadio} 
          arrayLength={(popularMovies.length/5)}
          handleChangeArrow={handleChangeArrow}
          position={"right"}
        />
      </div>
    </section>
  )
}