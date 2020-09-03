import "babel-polyfill";
import axios from 'axios';
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";
const storyUrl = `${baseUrl}item/`;

const selectFields = ({ id, by, url, time, title } = {}) => ({
  id,
  by,
  url,
  time,
  title,
});

export async function getIds(type){
    const result = await axios
        .get(`${baseUrl}${type}${json}`)
        .then(({data})=> data)
    return result
};

export async function getStory(storyId){
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => selectFields(data));
  return result;
};
