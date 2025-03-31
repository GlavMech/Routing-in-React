import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const mockData = [
  { id: 1, name: "Стивен Кинг" },
  { id: 2, name: "Рик Риордан" },
  { id: 3, name: "Сьюзен Коллинз" },
  { id: 4, name: "Вероника Рот" },
  { id: 5, name: "Гузель Яхина" },
];

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  useEffect(() => {
    setTimeout(() => {
      setItems(mockData.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())));
    }, 1000);
  }, [filter]);

  return (
    <div className="home-container_2">
      <input className="home-input"
        type="text"
        placeholder="Поиск"
        value={filter}
        onChange={(e) => setSearchParams({ filter: e.target.value })}
      />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;