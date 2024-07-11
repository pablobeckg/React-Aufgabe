import { useEffect, useState } from "react";
import "./News.css";
import { IArticle } from "./Interfaces";
import Loader from "../Loader";

const API_KEY = "d8e9c8d4c2214fc1ae922b056ba04f0b";

interface NewsProps {
  searchInput: string;
}

const News: React.FC<NewsProps> = ({ searchInput }) => {
  const [appleData, setAppleData] = useState<IArticle[] | null>(null);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2024-07-10&to=2024-07-10&sortBy=popularity&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
            setAppleData(data.articles.filter((article: IArticle) => article.title.includes(searchInput)));
        }
      })
      .catch((error) => {
        console.error("Fehler beim Fetch :-( ", error);
      });
  }, [searchInput]);  // Dependency array includes searchInput

  return (
    <section className="news">
        {appleData ? (
          appleData.map((item, index) => (
            <div key={index}>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              {item.urlToImage && <img src={item.urlToImage} alt="" />}
            </div>
          ))
        ) : (
          <Loader />
        )}
    </section>
  );
};

export default News;
