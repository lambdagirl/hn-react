import React from "react";
import { getStory,getComments } from "../utils/api";
import { formatDate } from "../utils/helper";

export const Story = React.memo(function Story({ storyId }) {
    const [story, setStory] = React.useState({});

    React.useEffect(() => {
    getStory(storyId).then((data) => {data && data.url && setStory(data)});
    }, []);

    return story && story.url ? (
      <div>
        <h2>
          <a href={story.url}>{story.title}</a>
        </h2>
        <h4>by {story.by} </h4>
        <span>on {formatDate(story.time)}</span>
      </div>
    ) : null;
});