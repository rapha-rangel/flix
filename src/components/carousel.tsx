import {useEffect, useRef, useState } from "react";
import RadioButton from "./radio-button";
import ArrowButton from "./arrow-button";
import Button from "./button";
import {logoHomepage} from "@/app/utils/logo-homepage";
import { newMovieOrEpisode } from "@/app/utils/new-movie-episode";

interface CarouselProps{
  trendingAll: any
}

const Carousel =({trendingAll}:CarouselProps)=>{
  console.log(trendingAll)
  const arrow = useRef<HTMLInputElement | null>(null);
  const [selectRadio, setSelectRadio] = useState(0);
  const [animateCarosuel, setAnimateCarosuel] = useState<string>("");

  const handleChangeArrow =(position: string)=>{
    const rangeOfCarousel = trendingAll.length -1;
    if(arrow.current){
      if(position ==="left"){
        if(arrow.current?.scrollLeft === 0){
          setSelectRadio(0);
        }else{
          arrow.current.scrollLeft -= arrow.current.offsetWidth;
          setSelectRadio(prev=>prev-1);
          setAnimateCarosuel(position);
          setTimeout(()=>{
            setAnimateCarosuel("");
          },300)
        }
      } else{
        if(arrow.current?.scrollLeft >= arrow.current.offsetWidth*rangeOfCarousel){
          setSelectRadio(rangeOfCarousel);
        }else{
          arrow.current.scrollLeft += arrow.current.offsetWidth;
          setSelectRadio(prev=>prev+1);
          setAnimateCarosuel(position);
          setTimeout(()=>{
            setAnimateCarosuel("");
          },300)
        }
      }
    }
  }

  const handleChange=(index:number)=>{
    setSelectRadio(index)
    if(selectRadio> index){
      setAnimateCarosuel("right");
    } else{
      setAnimateCarosuel("left");
    }
    if(arrow.current){
      arrow.current.scrollLeft = arrow.current.offsetWidth*index
    }
    setTimeout(()=>{
      setAnimateCarosuel("");
    },300)
  }

  

  useEffect(()=>{
    if(selectRadio < trendingAll.length -1){
      const runCarousel =
        setTimeout(()=>{
          if(arrow.current){
            arrow.current.scrollLeft = arrow.current.offsetWidth*(selectRadio+1);
          }
          setSelectRadio(prev=>prev+1);
          setAnimateCarosuel("right");
          setTimeout(()=>{
            setAnimateCarosuel("");
          },300)
        },100000)
      
      return () => {
        clearTimeout(runCarousel);
      };
    }
  },[selectRadio])

  return(
    <section className="group flex flex-row m-auto items-center relative" >
      <div className=" flex overflow-x-hidden transition-all z-10" ref={arrow}>
        <div className="flex max-w-[100%] h-[500px] tablet:h-[600px] relative">
          {trendingAll && trendingAll.map((movie:any, index: number) =>(
            <div className={`${animateCarosuel ==="right"?"animate-fadeMobileCarosuel tablet:animate-fadeRightImageCarousel":animateCarosuel ==="left"?"animate-fadeMobileCarosuel tablet:animate-fadeLeftImageCarousel":""}
              min-w-[100%] bg-no-repeat bg-center bg-[length:100vw_100vh] relative`}
              key={index}
              style ={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(12,12,12,1) 80%),
                url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}> 
              <div className="flex min-w-[400px] ">
                <div className={`${animateCarosuel ==="right"?"animate-fadeMobileCarosuel tablet:animate-fadeRightDivCarousel":animateCarosuel ==="left"?"animate-fadeMobileCarosuel tablet:animate-fadeLeftDivCarousel":""}
                  absolute min-w-[80%] top-[35%] left-[50%] items-center -translate-x-[50%] tablet:items-start  tablet:-translate-x-0  tablet:left-[3%] flex mb-4 flex-col`}>
                  <h4 className="text-[2rem] mobile:text-[3rem] tablet:text-[4rem] largeDesktop:text-[5rem] leading-tight font-semibold text-white">{movie.title?movie.title:movie.name}</h4>
                  <div className="text-white flex gap-2 items-center mb-1">
                    {newMovieOrEpisode(movie.release_date, movie.last_air_date, movie.first_air_date) ==="newMovie"?
                    <span className="text-[0.8rem] tablet:text-[1rem] border-2 px-2 border-white bg-[rgb(110, 107, 107)]">Novo</span>
                    :newMovieOrEpisode(movie.release_date, movie.last_air_date, movie.first_air_date)==="newEpisode"?
                    <span className="text-[0.8rem] tablet:text-[1rem] border-2 px-2 border-white bg-[rgb(110, 107, 107)]">Novo episódio</span>
                    :null}
                    {movie.homepage?<span>{logoHomepage(movie.homepage)}</span>:null}
                    {movie.release_date?<span className="text-[1.2rem]">{movie.release_date?movie.release_date.slice(0,4):null}</span>:null}
                    {movie.number_of_seasons?
                      <span>
                        {movie.number_of_seasons} Temporada{movie.number_of_seasons>1?"s":null}
                      </span>
                    :null}
                  </div>
                  <p className="font-medium tracking-tight text-[0.8rem]  tablet:text-[1rem] largeDesktop:text-[1.6rem] text-left text-white tablet:max-w-[500px] line-clamp-4 mb-2">{movie.overview}</p>
                  <div className="flex gap-8 mb-4">
                    <Button
                      title={"Ir para o filme"}
                    />
                    <Button
                      title={"Adicionar aos favoritos"}
                    />
                  </div>
                  <div className="flex items-center gap-1 text-white text-[0.8rem] tablet:text-[1rem] largeDesktop:text-[1.6rem] ">
                    <h4 className="font-semibold">Generos: </h4>
                    {movie.genres && movie.genres.map((genre:{id:number, name:string}, index: number, array:any)=>(
                      <p key={genre.id}>
                        {index !== array.length-1? `${genre.name},`:`${genre.name}`}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RadioButton
          array={trendingAll}
          selectRadio={selectRadio} 
          handleChange={handleChange} 
        />
      </div>
      <ArrowButton
        selectRadio={selectRadio} 
        arrayLength={trendingAll.length}
        handleChangeArrow={handleChangeArrow}
        position={"left"}
      />
      <ArrowButton
        selectRadio={selectRadio} 
        arrayLength={trendingAll.length}
        handleChangeArrow={handleChangeArrow}
        position={"right"}
      />
    </section>
  )
}

export default Carousel