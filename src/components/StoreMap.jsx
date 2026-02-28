import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function StoreMap({ stores }) {
  return (
    <MapContainer
        center={[41.910000, 12.530000]}
        zoom={5}
        style={{ height: "1000px", width: "100%" }}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stores.map((store) => (
            <Marker
                key={store.id}
                position={[store.latitudine, store.longitudine]}
            >
                <Popup>
                    <div className="popup-content">
                        <a href={`/stores/${store.id}`}>
                            
                        <h3>{store.nome}</h3>
                        <h4>{store.indirizzo}</h4>
                        {/* <h4>{store.telefono}</h4> */}
                        {!store.telefono ? <h4>Telefono non disponibile</h4> : <h4>{store.telefono}</h4>}
                        </a>
                    </div>
                </Popup>
            </Marker>
        ))}
    </MapContainer>
  );
}