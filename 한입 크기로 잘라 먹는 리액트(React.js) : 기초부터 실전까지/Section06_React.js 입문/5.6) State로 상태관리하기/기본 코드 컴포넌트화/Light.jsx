import { useState } from "react";

export default function Light() {
  const [light, setLight] = useState("OFF");
  return (
    <div>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "조명 끄기" : "조명 켜기"}
      </button>
    </div>
  );
}
