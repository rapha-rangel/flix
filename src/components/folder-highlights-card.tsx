import Image from "next/image";
import { newMovieOrEpisode } from "../app/utils/new-movie-episode";
import { FaRegHeart } from "react-icons/fa";

interface FolderHighlightsCardProps{
  index: number
  item:any
}

export default function FolderHighlightsCard ({index, item}: FolderHighlightsCardProps){
  return (
    <div className={`${index === 0?"ml-10":index === 9?"mr-[2%]":""} flex items-baseline z-10 group/image justify-center relative flex-shrink-0 w-[calc(-25px+20vw)]`} key={index}>
      {index===0?
        <p className="w-[calc(12%)]
          text-outline-blue group-hover/image:text-outline-transparent [text-shadow:_-10px_0px_9px_rgba(12,12,12,1)]
          scale-90 -translate-x-0 -translate-y-[6%] group-hover/image:scale-100 text-[rgba(12,12,12,1)]  text-[8rem] font-semibold group-hover/image:-translate-x-2 group-hover/image:text-[#4f46e5] transition-all duration-500 ease-in-out"
        >
            {index+1}
        </p> 
        :index!== 9?
        <p className="w-[calc(12%)]
          text-outline-blue group-hover/image:text-outline-transparent [text-shadow:_-10px_0px_9px_rgba(12,12,12,1)]
          scale-90 -translate-x-3 -translate-y-[5%] group-hover/image:scale-100 text-[rgba(12,12,12,1)]  text-[8rem] font-semibold group-hover/image:-translate-x-5 group-hover/image:text-[#4f46e5] transition-all duration-500 ease-in-out"
        >{index+1}</p>:
        <div className="inline-flex block w-[calc(12%)] scale-90 -translate-y-[5%] -translate-x-7  group-hover/image:scale-100 text-[8rem] text-outline-blue  group-hover/image:-translate-x-9 group-hover/image:text-[#4f46e5] uppercase font-semibold [text-shadow:_-10px_0px_9px_rgba(12,12,12,1)] text-[rgba(12,12,12,1)] transition-all duration-500 ease-in-out">
          <h3 className="tracking-[-2rem]">1</h3>
          <h3>0</h3>
        </div>
      }
      <div className="relative w-full h-auto">
        {newMovieOrEpisode(item.release_date,item.last_air_date, item.first_air_date) ==="newMovie"?
          <span className="absolute top-[5%] left-[5%] text-sm font-semibold  z-10 border-1 border-white p-1 bg-white">Novo</span>
          :newMovieOrEpisode(item.release_date, item.last_air_date, item.first_air_date) ==="newEpisode"?
          <span className="absolute top-[5%] left-[5%] text-sm font-semibold  z-10 border-1 border-white p-1 bg-white">Novo Episodio</span>
          :null
        }
        <div className="absolute flex items-center rounded-full bg-gray-600 p-[0.4rem] top-[5%] right-[5%] z-10 opacity-20 group-hover/image:bg-[#a7a7aa5a] group-hover/image:opacity-100 transition-all ease-in-out duration-300">
          <FaRegHeart className="text-[1.2rem] text-gray-400 group-hover/image:text-white "/>
        </div>
        <Image className="w-[100%] h-full scale-90 transition-all ease-in-out duration-300 " 
          src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`} alt={item.original_title? item.original_title:item.original_name} width={400} height={300}/>
      </div>
        
    </div>
  )
}