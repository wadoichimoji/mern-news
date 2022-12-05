import React from "react";
import * as News from "../../utilities/news-api";

export default function NewOrderPage() {
  async function handleClick() {
    const stories = await News.topStories();
    console.log(stories);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const searchParam = {
      search: evt.target.search.value,
    };
    const searchStories = await News.searchStories(searchParam);
    console.log(searchStories);
  }

  return (
    <>
      <button onClick={handleClick}>Test API</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" defaultValue="bitcoin musk"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
