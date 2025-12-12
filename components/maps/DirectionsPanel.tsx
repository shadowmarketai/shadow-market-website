"use client";

import { useState } from 'react';
import { Navigation, Clock, Route } from 'lucide-react';
import { TravelModeSelector } from './TravelModeSelector';
import { DestinationInput } from './DestinationInput';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';

type TravelMode = 'DRIVING' | 'TRANSIT' | 'BICYCLING' | 'WALKING';

export function DirectionsPanel() {
  const [origin, setOrigin] = useState('');
  const [travelMode, setTravelMode] = useState<TravelMode>('DRIVING');
  const [directions, setDirections] = useState<{
    distance: string;
    duration: string;
    url: string;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string>('');

  const getDirections = async () => {
    if (!origin.trim()) {
      setError('Please enter your location');
      return;
    }

    setIsCalculating(true);
    setError('');

    try {
      const service = new google.maps.DirectionsService();

      const result = await service.route({
        origin: origin,
        destination: {
          lat: SITE_CONFIG.location.coordinates.lat,
          lng: SITE_CONFIG.location.coordinates.lng,
        },
        travelMode: google.maps.TravelMode[travelMode],
      });

      if (result.routes[0]) {
        const route = result.routes[0].legs[0];
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${SITE_CONFIG.location.coordinates.lat},${SITE_CONFIG.location.coordinates.lng}&travelmode=${travelMode.toLowerCase()}`;

        setDirections({
          distance: route.distance?.text || 'N/A',
          duration: route.duration?.text || 'N/A',
          url: mapsUrl,
        });
      }
    } catch (err) {
      console.error('Directions error:', err);
      setError('Could not calculate directions. Please try again.');
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Navigation className="w-6 h-6 text-[hsl(var(--primary))]" />
        <h3 className="text-2xl font-bold text-[hsl(var(--foreground))]">Get Directions</h3>
      </div>

      <DestinationInput
        value={origin}
        onChange={setOrigin}
        placeholder="Enter your starting location"
      />

      <TravelModeSelector
        selected={travelMode}
        onSelect={setTravelMode}
      />

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        onClick={getDirections}
        disabled={isCalculating || !origin.trim()}
        className="w-full mb-4"
        size="lg"
      >
        {isCalculating ? 'Calculating...' : 'Get Directions'}
      </Button>

      {directions && (
        <div className="space-y-4">
          <div className="bg-[hsl(var(--muted))] rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-start gap-2">
                <Route className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Distance</p>
                  <p className="text-lg font-bold text-[hsl(var(--foreground))]">{directions.distance}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5" />
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Duration</p>
                  <p className="text-lg font-bold text-[hsl(var(--foreground))]">{directions.duration}</p>
                </div>
              </div>
            </div>
            <a
              href={directions.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="outline" className="w-full">
                Open in Google Maps
              </Button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              <strong className="text-[hsl(var(--foreground))]">Destination:</strong><br />
              {SITE_CONFIG.location.address}
            </p>
          </div>
        </div>
      )}

      {!directions && !error && (
        <div className="text-center py-8">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Enter your location to see travel time and distance to our office
          </p>
        </div>
      )}
    </div>
  );
}

export default DirectionsPanel;
