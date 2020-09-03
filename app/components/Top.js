import React from 'react';
import getIds from "../utils/api";

export default function Top(){
    const [ids,setIds]= React.useState({});
    React.useEffect(() => {
      getIds("topstories").then((data) => setIds(data));
    });

    return (
      <div className="container">
        {ids && <pre>{JSON.stringify(ids, null, 2)}</pre>}
      </div>
    );
}