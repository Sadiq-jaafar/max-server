// api-client.ts

import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:9000/api',
  // params: {
  //   key: 'AIzaSyCulc43DqsOQXkaufUXJ59VacYHMJ6q52Y', // Replace with your YouTube API key
  // },
});

export default apiClient;



// import axios from "axios";

// export default axios.create({
//     params:{
//         baseURl:'https://www.googleapis.com/youtube/v3',
//         key: 'AIzaSyCulc43DqsOQXkaufUXJ59VacYHMJ6q52Y'
//     }

// })