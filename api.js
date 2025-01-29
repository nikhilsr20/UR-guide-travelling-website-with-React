import React, { useState } from "react";

const Api = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchWikipedia = async () => {
    if (!query) return;
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("No results found");
      }

      const data = await response.json();
      setResult(data);
      console.log(data)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="search">
      
      <input
        type="text"
        className="bar"
        placeholder="Enter a topic..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={fetchWikipedia}
        className="btn"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {result && (
        <div className="mt-5 p-4 border rounded shadow-md">
          <h3 className="text-xl font-semibold">{result.title}</h3>
          {result.thumbnail && (
            <img
              src={result.thumbnail.source}
              alt={result.title}
              className="w-32 mx-auto my-3"
            />
          )}
          <p className="text-gray-700">{result.extract}</p>
          <a
            href={result.content_urls.desktop.page}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block mt-2"
          >
            Read more on Wikipedia
          </a>
        </div>
      )}
    </div>
  );
};


export default Api;