import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function StoreDetail() {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/stores/${id}`)
      .then((res) => res.json())
      .then((data) => setStore(data));
  }, [id]);

  if (!store) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <p>Caricamento...</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="store-detail-h1">Dettaglio Store</h1>

      <div className="store-detail-card">
        <h2>{store.nome}</h2>

        <div className="store-detail-info">
          <div className="store-detail-row">
            <strong>Città:</strong>
            <p>{store.città}</p>
          </div>

          <div className="store-detail-row">
            <strong>Indirizzo:</strong>
            <p>{store.indirizzo}</p>
          </div>

          <div className="store-detail-row">
            <strong>Telefono:</strong>
            {!store.telefono ? (
              <p>Telefono non disponibile</p>
            ) : (
              <p>{store.telefono}</p>
            )}
          </div>
        </div>

        <div className="store-detail-actions">
          {store.telefono && (
            <a
              href={`tel:${store.telefono}`}
              className="store-detail-btn store-detail-btn--primary"
            >
              Chiama
            </a>
          )}

          <div style={{ height: "400px", width: "100%", marginTop: "2rem" }}>
            <MapContainer
              center={[store.latitudine, store.longitudine]}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={[store.latitudine, store.longitudine]}>
                <Popup>
                  <strong>{store.nome}</strong>
                  <br />
                  {store.indirizzo}
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${store.latitudine},${store.longitudine}`}
            target="_blank"
            rel="noopener noreferrer"
            className="store-detail-btn store-detail-btn--secondary"
          >
            Visualizza in Google Maps
          </a>
        </div>
      </div>
      <div className="store-detail-button">
        <Link to="/" className="store-detail-btn store-detail-btn--back">
          Torna alla lista
        </Link>
      </div>
    </>
  );
}
