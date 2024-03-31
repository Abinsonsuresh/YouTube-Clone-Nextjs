import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '790ce6c526msh3d330531fc0fc86p1fcf0bjsnc3eacf62ac63',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchAPIData = async (endpoint) =>{
    const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);
    return data;
}