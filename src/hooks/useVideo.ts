import useData from "./useData";

interface Snippet {
    title: string;
    description: string;
    thumbnails: string;
  }
  
  export interface Video {
    id: string;
    snippet: Snippet;
  }
  
  
  

const useVideos = ()=> useData<Video>('/videos')


export default useVideos