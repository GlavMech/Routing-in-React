import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за подписку, ${email}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="home-container_2">
      <input className="home-input"
        type="email"
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="home-button">Подписаться</button>
    </form>
  );
};

export default Subscribe;