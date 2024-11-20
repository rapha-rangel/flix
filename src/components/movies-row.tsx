import { useRef, useState } from "react";
import FolderCard from "./folder-card";
import ArrowButton from "./arrow-button";
import FolderFavorites from "./folder-favorites";

interface MovieRowProps {
  array: any
}

export default function MovieRow({array}:MovieRowProps ){
  const arrow = useRef<HTMLInputElement | null>(null);
  const [selectRadio, setSelectRadio] = useState(0);

  const handleChangeArrow =(position: string)=>{
    const rangeOfCarousel = array.moviesArray.length -1;
    if(arrow.current){
      console.log( arrow.current.scrollLeft, arrow.current.offsetWidth)
      if(position ==="left"){
        if(arrow.current?.scrollLeft === 0){
          setSelectRadio(0);
        }else{
          arrow.current.scrollLeft -= arrow.current.offsetWidth-(arrow.current.offsetWidth*(20/100));
          setSelectRadio(prev=>prev-1);
        }
      } else{
        if(arrow.current?.scrollLeft >= arrow.current.offsetWidth*rangeOfCarousel){
          setSelectRadio(rangeOfCarousel);
        }else if(arrow.current?.scrollLeft === 0){
          arrow.current.scrollLeft += arrow.current.offsetWidth-(arrow.current.offsetWidth*(20/100));
        }else{
          arrow.current.scrollLeft += arrow.current.offsetWidth-(arrow.current.offsetWidth*(20/100));
        }
          setSelectRadio(prev=>prev+1);
        }
      }
    }

  return (
    <div>
      <h3 className="text-white text-2xl px-10 font-bold">{array.name}</h3>
      <div className="flex group relative ">
        <div className="flex overflow-hidden scroll-smooth w-full" ref={arrow}>
          {array.name==="favorites"?
            array.moviesArray.map((movie:any,index:number, array:any)=>(
            <FolderFavorites
              key={index}
              movie={movie} 
              index={index}
              length={array.length}
            />
          )):
          array.moviesArray.map((movie:any,index:number, array:any)=>(
            <FolderCard
              key={index}
              movie={movie} 
              index={index}
              length={array.length}
          />
          ))
          }
        </div>
        <ArrowButton
          selectRadio={selectRadio} 
          arrayLength={array.name==="favorites"?Math.ceil(array.moviesArray.length/4):Math.ceil(array.moviesArray.length/6)}
          handleChangeArrow={handleChangeArrow}
          position={"left"}
        />
        <ArrowButton
          selectRadio={selectRadio} 
          arrayLength={array.name==="favorites"?Math.ceil(array.moviesArray.length/4):Math.ceil(array.moviesArray.length/6)}
          handleChangeArrow={handleChangeArrow}
          position={"right"}
        />
      </div>
    </div>
  )
}