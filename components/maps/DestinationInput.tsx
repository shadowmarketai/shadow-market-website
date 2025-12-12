"use client";

import { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

interface DestinationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function DestinationInput({ value, onChange, placeholder = "Enter your location" }: DestinationInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current || !window.google) return;

    const autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode', 'establishment'],
      componentRestrictions: { country: 'in' },
      fields: ['formatted_address', 'geometry', 'name'],
    });

    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace();
      if (place.formatted_address) {
        onChange(place.formatted_address);
      } else if (place.name) {
        onChange(place.name);
      }
    });

    setAutocomplete(autocompleteInstance);

    return () => {
      if (autocompleteInstance) {
        google.maps.event.clearInstanceListeners(autocompleteInstance);
      }
    };
  }, [onChange]);

  return (
    <div className="mb-4">
      <label htmlFor="destination-input" className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
        Your Location
      </label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          id="destination-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-white focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
        />
      </div>
    </div>
  );
}

export default DestinationInput;
