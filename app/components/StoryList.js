import React from 'react';
import {getIds} from "../utils/api";
import Story from "./Story.js"
export default function StoryList(){
    const [ids,setIds]= React.useState([]);

    React.useEffect(() => {
      getIds("topstories").then((data) => setIds(data));
    });
    return (
      <div className="container">
        // {ids && <pre>{JSON.stringify(ids, null, 2)}</pre>}
        {ids.map((id)=> {
          <Story key={id} storyId={id} />
        })}
      </div>
    );
}