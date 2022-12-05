import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import SearchPage from "../SearchPage/SearchPage";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import TopStoriesPage from "../TopStoriesPage/TopStoriesPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/stories" element={<TopStoriesPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
