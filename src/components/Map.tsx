import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const [apiKey, setApiKey] = useState('');
  const [showMap, setShowMap] = useState(false);

  // Coordenadas de Barueri, SP
  const center = {
    lat: -23.5106,
    lng: -46.8767
  };

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '12px'
  };

  const handleShowMap = () => {
    if (apiKey.trim()) {
      setShowMap(true);
    }
  };

  if (!showMap) {
    return (
      <div className="bg-card p-8 rounded-lg border">
        <h3 className="text-2xl font-bold mb-4">Mapa de Eventos em Barueri</h3>
        <p className="text-muted-foreground mb-4">
          Para visualizar o mapa, insira sua chave da API do Google Maps.
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary ml-1 underline"
          >
            Obter chave da API
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Cole sua chave da API do Google Maps"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleShowMap}>Mostrar Mapa</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          options={{
            styles: [
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }]
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#04B0f5" }]
              }
            ]
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
