import React from "react";
import useFetch from "../hooks/useFetch";

const API_KEY = "6a8bc36dced34d94a3427076ffe2fffb"; // Replace with your actual API key
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const Home = () => {
  const { data, loading, error } = useFetch(NEWS_URL);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((article, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-md" />
          <h2 className="font-bold text-lg mt-2">{article.title}</h2>
          <p className="text-sm text-gray-600 mt-1">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
