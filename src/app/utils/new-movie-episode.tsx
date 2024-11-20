export function newMovieOrEpisode( movie: string|undefined, last:string|undefined, first: string|undefined) {

  const ifMovieOrSerie =(movie: string|undefined, last:string|undefined, first: string|undefined)=>{
    switch (true){
      case movie!==undefined:
        return movie
        break;
      case last !==null:
        return last;
        break;
      case first!==undefined:
        return first;
        break;
      default:
    }
  }

  var date= ifMovieOrSerie(movie, last, first);
  const recivedDate = new Date(date !==undefined? date:""); 
  const today = new Date(); 
  const sevenDaysFromNow = new Date(); 
  sevenDaysFromNow.setDate(today.getDate() - 7);
  const isNew =recivedDate >= sevenDaysFromNow;

  if(movie!==undefined){
    if(isNew) return "newMovie" 
  }
  if(last !==null){
    if(isNew) return "newEpisode" 
  } else{
    if(isNew) return "newEpisode" 
  } 


}