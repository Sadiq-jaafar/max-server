import axios from "axios";
import useData from "./useData";
import { Categories } from './useCategories';


  
  export interface Video {
    id:string ,
    title:string,
    description: string,  
    type:string ,
    thumbnail:string,
    duration:string,
    channel_id:string,    
    publishedAt:string,
  }
  
  
  

const useVideos = ()=> useData<Video>('/media')

  

export default useVideos