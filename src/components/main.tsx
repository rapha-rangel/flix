"use client"

import api from "@/api";
import React, { useEffect, useState } from "react";
import MovieRow from "./movies-row";
import Header from "./header";
import Banner from "./banner";
import HighlightsRow from "./highlights-row";
import FolderFavorites from "./folder-favorites";
import DefaultLayout from "./default-layout";

export default function Main(){
  const [dataMovies, setMovies] = useState<any>([]);
  const [popular, setPopular] = useState<any>({
    movies:[],
    series:[]
  });
  const [trendingAll, setTrendingAll] = useState<any>([]);
  const [favoriteList, setFavoriteList] = useState<any>({
    name:"favorites",
    moviesArray:[]
  });
  


  const getAllGenre = async()=>{
    try{
      const response= await api.get('/genre/movie/list?language=pt-BR/');
      return response.data.genres
    } catch(e){
      console.log(e)
    }
  }

  const getTrendingMovies =async()=>{
    try{
      const response= await api.get('/trending/all/day?language=pt-BR/');
      const resSlice =response.data.results.slice(0,6);
      const resultsTvSeriesInfo = await Promise.all(resSlice.map(async (item:any, index:number)=>{
        if(item.media_type ==="tv"){
          const res=await getTvSeriesInfo(item);
          return res;
        } else{
          const res=await getMoviesInfo(item);
          return res
        }
      }))
      return resultsTvSeriesInfo;
    } catch(e){
      console.log(e)
    }
  }

  const getPopular = async(type:string)=>{
    try{
      const response= await api.get(`/${type}/popular?language=pt-BR/`);
      const resSlice =response.data.results.slice(0,10);
      const resultsPopularInfo = await Promise.all(resSlice.map(async (item:any, index:number)=>{
        if(type==="tv"){
          const res=await getTvSeriesInfo(item);
          return res;
        } else{
          const res=await getMoviesInfo(item);
          return res
        }
      }))
      return resultsPopularInfo;
    } catch(e){
      console.log(e)
    }
  }

  const getMoviesByGenre=async(item:any)=>{
    const {name, id} = item;
    try{
      const response= await api.get(`/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${id}`);
      const newRes ={
        name,
        moviesArray:response.data.results
      }
      return newRes;
    } catch(e){
      console.log(e)
    }
  };

  const getTvSeriesInfo=async(item:any)=>{
    const {id} = item;
    try{
      const response= await api.get(`/tv/${id}?language=pt-BR`);
      return response.data;
    } catch(e){
      console.log(e)
    }
  };

  const getMoviesInfo=async(item:any)=>{
    const {id} = item;
    try{
      const response= await api.get(`/movie/${id}?language=pt-BR`);
      return response.data;
    } catch(e){
      console.log(e)
    }
  };

  const getAllMovies =async ()=>{
    const genres = await getAllGenre();
    const trending = await getTrendingMovies();
    const popularSeries =await getPopular("tv");
    const popularMovies = await getPopular("movie");

    const resultsByGenre = await Promise.all(genres.map(async (item:any)=>{
      return await getMoviesByGenre(item);
    }));
    const newRes ={
      name:"favorites",
      moviesArray:trending
    }
    setPopular((prev:any)=>({...prev,series:popularSeries}));
    setPopular((prev:any)=>({...prev,movies:popularMovies}));
    setFavoriteList((prev: any)=> ({...prev, moviesArray:trending}));
    setTrendingAll(trending);
    setMovies(resultsByGenre);
  }



  useEffect(()=>{
    getAllMovies();
  },[]);

  return(
    <>
      <Header/>
      <Banner
        trendingAll={trendingAll}
      />
    <DefaultLayout >

      <div className="py-8 ">
        <MovieRow
          array={favoriteList} 
        />
      </div>
      <HighlightsRow
        hasFavoriteList={trendingAll.length>0}
        title={'filmes'}
        popularMovies={popular.movies}
      />
      <HighlightsRow
        hasFavoriteList={trendingAll.length>0}
        title={'series'}
        popularMovies={popular.series}
      />
        {dataMovies && dataMovies.map((array: any, index: number)=>(
          <MovieRow
            key={index}
            array={array} 
          />
        ))}
    </DefaultLayout>

      <div className="fixed bg-gradient-to-b from-[rgba(12,12,12,1)] from-5% to-[rgba(0,0,0,0)] to-100% top-0 w-full  h-[60%] transition-all ease-in-out duration-300"></div>
      </>
  )
}