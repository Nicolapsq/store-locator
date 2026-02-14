import { useCallback, useEffect, useState } from "react";
import StoreMap from "../components/StoreMap";

function debounce(callBack, delay) {
  let timeout;
  return function (value) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBack(value);
    }, delay);
  };
}

export default function StoreLocator() {
  const [stores, setStores] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchStoresByName, setSearchStoresByName] = useState("");
  const [selectStoreByCity, setSelectStoreByCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  const debouncefinalFilteredStoresByName = useCallback(
    debounce((value) => {
        setSearchStoresByName(value);
    },1000),
    []
  );

  const handleFilteredStores = (e) => {
    setInputValue(e.target.value);
    debouncefinalFilteredStoresByName(e.target.value);
  };
  const handleSelectStoreByCity = (e) => {
    setSelectStoreByCity(e.target.value);
  };

  const filteredStores = stores.filter(store => store.nome.toLowerCase().includes(searchStoresByName.toLowerCase()));
  
  const cities = Array.from(new Set(stores.map(store => store.città)));

  const finalFilteredStores = selectStoreByCity
    ? filteredStores.filter((store) => store.città === selectStoreByCity)
    : filteredStores;



  return (
    <>
      <h1>Lista degli Store</h1>

      <div className="store-locator-filters">
        <input
            type="text"
            placeholder="Cerca per nome..."
            value={inputValue}
            onChange={handleFilteredStores}
        />

        <select
            value={selectStoreByCity}
            onChange={handleSelectStoreByCity}>
          <option value="">
            Seleziona una città
          </option>
          {cities.map(city =>
            <option key={city} value={city}>
                {city}
            </option>)}
        </select>
      </div>

      <div className="store-locator-container">
        <div className="store-locator-left">
          <ul className="store-locator-list">
            {finalFilteredStores.map((store) => (
              <li key={store.id}>
                <a href={`/stores/${store.id}`}>
                  <strong>{store.nome}</strong>
                  <div>{store.città}</div>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    {store.indirizzo}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="store-locator-right">
          {finalFilteredStores.length > 0 ? (
            <div className="store-map-wrapper">
              <StoreMap stores={finalFilteredStores} />
              </div>
              ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#999",
              }}
            >
              Nessun store trovato
            </div>
          )}
        </div>
      </div>
    </>
  );
}