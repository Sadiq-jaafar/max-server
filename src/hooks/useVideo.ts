import axios from "axios";
import useData from "./useData";
import { Categories } from './useCategories';

interface Snippet {
    title: string;
    description: string;
    thumbnails: string;
  }
  
  export interface Video {
    id: string;
    snippet: Snippet;
  }
  
  
  

const useVideos = (selectedCategory:Categories | null)=> useData<Video>('/videos',{params: {Categories: selectedCategory?.id}}, [selectedCategory?.id])

  

export default useVideos