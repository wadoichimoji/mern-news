import React from "react";
import * as News from "../../utilities/news-api";

export default function NewOrderPage() {
  async function handleClick() {
    const stories = await News.topStories();
    console.log(stories);
  }

  return <button onClick={handleClick}>Test API</button>;
}
