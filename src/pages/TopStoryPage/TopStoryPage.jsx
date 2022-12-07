import StoryCard from "../../components/StoryCard/StoryCard";

import React from 'react'

export default function TopStoryPage({topStories, setCurrentStory}) {
  console.log(topStories)
  return (
    <>
    <div>{topStories.map((story, idx) => {
        return <StoryCard story={story} setCurrentStory={setCurrentStory} key={idx} />;
    })}
    </div>
    </>
  )
}
