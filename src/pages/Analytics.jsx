import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const API_KEY = "6a8bc36dced34d94a3427076ffe2fffb";
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const categories = ["general", "business", "technology", "sports", "health", "entertainment"];

const Analytics = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      const categoryData = await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(`${BASE_URL}&category=${category}`);
          const data = await res.json();
          return { name: category, count: data.articles.length };
        })
      );
      setChartData(categoryData);
    };

    fetchCategoryCounts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News Analytics</h1>
      <p className="mb-4 italic">Reflecting the news beign brought to you at a time on this dashboard...</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
