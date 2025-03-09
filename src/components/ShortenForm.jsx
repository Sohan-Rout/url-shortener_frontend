import { useState } from "react";
import axios from "axios";
import "./ShortenForm.css";

const ShortenForm = ({ setUrls, darkMode }) => {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://url-shortner-api-rplq.onrender.com/api/url/shorten";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(API_URL, { longUrl });
      console.log("API Response:", res.data);

      if (!res.data || !res.data.shortUrl) {
        throw new Error("Invalid response from server");
      }

      // Extract just the unique code part from the full URL
      const shortCode = res.data.shortUrl.split('/').pop();
      
      setUrls((prev) => [
        ...prev,
        {
          longUrl: res.data.longUrl,
          // Create a cleaner shortened URL
          shortUrl: `linkhive/${shortCode}`, // You can change this to your frontend domain
          // Store the full backend URL for actual redirection
          fullUrl: `https://url-shortner-api-rplq.onrender.com/${shortCode}`
        },
      ]);

      setLongUrl("");
    } catch (error) {
      console.error("Error shortening URL:", error.response?.data || error.message);
      setError("Failed to shorten URL. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Paste your URL here..."
        className={`url-input ${darkMode ? "dark-input" : "light-input"}`}
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button className={`submit-button ${loading ? "generating" : ""}`} disabled={loading}>
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default ShortenForm;