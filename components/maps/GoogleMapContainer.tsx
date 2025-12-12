"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { SITE_CONFIG } from '@/lib/constants';

const libraries: ("places" | "geometry")[] = ["places", "geometry"];

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: true,
  fullscreenControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'on' }]
    }
  ]
};

export function GoogleMapContainer() {
  const center = {
    lat: SITE_CONFIG.location.coordinates.lat,
    lng: SITE_CONFIG.location.coordinates.lng,
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={libraries}
        loadingElement={
          <div className="h-[500px] bg-muted animate-pulse flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        }
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={mapOptions}
        >
          <Marker
            position={center}
            title="SHADOW MARKET"
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapContainer;
