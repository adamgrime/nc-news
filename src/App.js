import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import TopicPages from './components/TopicPages';
import SingleArticle from './components/SingleArticle';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import ErrorPage from './components/Error.jsx';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
  });
  
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="wrapper">
        <Header />

        <div>
          <Nav />
        </div>

        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<TopicPages />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
  
}

export default App;

