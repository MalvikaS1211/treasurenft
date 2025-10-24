import React, { useState, useEffect } from "react";
import bg from "../../src/assets/comingsoonbg.avif";
export default function CommingSoon() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-27T15:00:00"); // 🎯 your target date/time
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="text-white d-flex flex-column justify-content-center align-items-center text-center p-3"
        style={{
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-4 pb-md-5">
          {" "}
          <h1
            className="fw-light"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.125rem)",
              color: "white",
            }}
          >
            Something Awesome is on the way
          </h1>
        </div>
        <div className="">
          <span
            className="text-white"
            style={{ fontSize: "clamp(3rem, 15vw, 7.125rem)", fontWeight: 500 }}
          >
            COMING SOON
          </span>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center pt-4 pt-md-5">
          {[
            { label: "Day(s)", value: timeLeft.days },
            { label: "Hour(s)", value: timeLeft.hours },
            { label: "Minute(s)", value: timeLeft.minutes },
            { label: "Second(s)", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="text-center mx-2 mx-md-3 position-relative">
              <h1
                style={{
                  fontSize: "clamp(2rem, 8vw, 2.5rem)",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                {item.value.toString().padStart(2, "0")}
              </h1>
              <div
                style={{
                  fontSize: "clamp(0.8rem, 3vw, 0.875rem)",
                  color: "#b4b4b4ff",
                  fontWeight: "500",
                }}
              >
                {item.label}
              </div>

              {/* Divider line between items */}
              {index < 3 && window.innerWidth > 768 && (
                <div
                  className="position-absolute"
                  style={{
                    right: "-13px",
                    top: "14%",
                    height: "50%",
                    width: "1px",
                    backgroundColor: "#444",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
