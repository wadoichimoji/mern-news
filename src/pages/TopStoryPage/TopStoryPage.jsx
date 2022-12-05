import StoryCard from "../../components/StoryCard/StoryCard";

import React from 'react'

export default function TopStoryPage({topStories}) {
  console.log(topStories)
  return (
    <>
    <div>{topStories.map((story, idx) => {
        return <StoryCard story={story} key={idx} />;
    })}
    </div>
    </>
  )
}
