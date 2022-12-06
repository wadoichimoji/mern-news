import React from 'react'
import StoryCard from '../../components/StoryCard/StoryCard';

export default function SavedStoryPage({savedStories}) {
  return (
    <>
    <div>{savedStories.map((story, idx) => {
        return <StoryCard story={story} key={idx} /> ;
    })}
    </div>
    </>
  )
}
