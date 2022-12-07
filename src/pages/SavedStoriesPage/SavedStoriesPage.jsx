import React from 'react'
import SavedStoryCard from "../../components/SavedStoryCard/SavedStoryCard"

export default function SavedStoryPage({savedStories, handleDelete}) {

  return (
    <>
    <div>{savedStories.map((story, idx) => {
        return <SavedStoryCard story={story} key={idx} handleDelete={handleDelete}/> ;
    })}
    </div>
    </>
  )
}
