import "babel-polyfill";
import axios from 'axios';
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";

export default async function getIds(type){
    const result = await axios
        .get(`${baseUrl}${type}${json}`)
        .then(({data})=> data)
    return result
}
