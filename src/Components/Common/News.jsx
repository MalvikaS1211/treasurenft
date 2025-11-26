import { useEffect, useState } from "react";
import { getMessage } from "../../Helper/API_Functions";

const News = () => {
  const [news, setNews] = useState("");

  const handleMsg = async () => {
    try {
      const res = await getMessage();
      setNews(res?.data?.Message || ""); // Safely access Message field
    } catch (error) {
      console.error("Error fetching message:", error);
      setNews("Error loading news");
    }
  };

  useEffect(() => {
    handleMsg();
  }, []);

  return (
    <>
      {news && (
        <div className="marquee-div">
          <marquee className="marquee-msg">{news}</marquee>
        </div>
      )}
    </>
  );
};

export default News;
