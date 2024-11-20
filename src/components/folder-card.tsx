import { newMovieOrEpisode } from "@/app/utils/new-movie-episode";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

interface FolderCardProps {
  index: number
  movie: any
  length: number
}

export default function FolderCard ({index, movie, length}: FolderCardProps){
  const side:any =window.innerWidth;

  return (
    <div key={index} className={`${index===0?"ml-[2%]":index===length-1?"mr-[2%]":""} group/item relative z-10 flex-shrink-0 w-[16%] `}  >
      {newMovieOrEpisode(movie.release_date,"","") ==="newMovie"?
        <span className="absolute top-[4%] left-[4%] scale-90  group-hover/item/item:left-[0%] group-hover/item:top-[0%] group-hover/item:scale-100  font-semibold  z-10 border-1 border-white px-1 bg-white transition-all ease-in-out duration-300 rounded-ee shadow-2xl">Novo</span>
        :null
      }
      <div className="absolute scale-90 flex items-center rounded-full bg-gray-600 p-[0.4rem] top-[5%] right-[5%] z-10 opacity-20 group-hover/item:scale-100 group-hover/item:right-[0%] group-hover/item:top-0 group-hover/item:bg-[#a7a7aa5a] group-hover/item:opacity-100 transition-all ease-in-out duration-300">
        <FaRegHeart className="text-[1.2rem] text-gray-400 group-hover/item:text-white "/>
      </div>
      <Image className="w-full h-full scale-90 group-hover/item:scale-100 transition-all ease-in-out duration-300 z-10" 
  
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.original_title? movie.original_title:movie.original_name} width={400} height={300}/>
    </div>
  )
}