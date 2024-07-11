import { useEffect, useState } from "react";
import "./News.css";
import { IArticle } from "./Interfaces";
import Loader from "../Loader";

const API_KEY = "d8e9c8d4c2214fc1ae922b056ba04f0b";

const News = () => {
  const [appleData, setAppleData] = useState<IArticle[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [query, setQuery] = useState<string>("apple");
  const [language, setLanguage] = useState<string>("");

  const fetchNews = (query: string, language: string) => {
    const languageQuery = language ? `&language=${language}` : "";
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${API_KEY}${languageQuery}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setAppleData(
            data.articles.filter(
              (article: IArticle) => article.title !== "[Removed]"
            )
          );
        }
      })
      .catch((error) => {
        console.error("Fehler beim Fetch :-( ", error);
      });
  };

  const handleSearch = () => {
    // Update the query to trigger the fetch
    if (searchInput.trim() !== query) {
      setQuery(searchInput);
    } else {
      fetchNews(searchInput, language);
    }
  };

  useEffect(() => {
    fetchNews(query, language);
  }, [query, language]);

  return (
    <>
      <header>
        <h1 className="title-header">Breaking News</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInput(event.target.value);
            }}
          />
          <select
            value={language}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setLanguage(event.target.value);
            }}
          >
            <option value="">Select your language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <section className="news">
        {appleData ? (
          appleData.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              {item.urlToImage && <img src={item.urlToImage} alt="" />}
            </div>
          ))
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default News;
