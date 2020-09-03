import React from 'react';
import {getIds} from "../utils/api";
import {Story} from "./Story.js"
export default function StoryList(type){
    const [ids,setIds]= React.useState([]);

    React.useEffect(() => {
      getIds("topstories").then((data) => setIds(data));
    },[]);
    return (
      <>
        <div className="container">
          {ids.slice(0, 10).map((storyId) => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </div>
      </>
    );
}