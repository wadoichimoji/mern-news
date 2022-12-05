import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import TopStoryPage from "../TopStoryPage/TopStoryPage";
import SavedStoriesPage from "../SavedStoriesPage/SavedStoriesPage";
import * as newsAPI from "../../utilities/news-api";

function App() {
  const [user, setUser] = useState(getUser());
  const [topStories, setTopStories] = useState([]);
  const [savedStories, setSavedStories] = useState([]);

  useEffect(function(){
    async function getStory(){
      const stories = await newsAPI.topStories()
      setTopStories(stories)
    }
    // async function saveStory(){
    //   const stories = await newsAPI.getSavedStories()
    //   setSavedStories(stories)
    // }
    getStory()
  },[])


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/stories/top" element={<TopStoryPage topStories={topStories.articles}/>} />
            <Route path="/stories/saved" element={<SavedStoriesPage savedStories={savedStories.articles}/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
