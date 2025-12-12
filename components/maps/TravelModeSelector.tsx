"use client";

import { Car, Bus, Bike, Footprints } from 'lucide-react';

type TravelMode = 'DRIVING' | 'TRANSIT' | 'BICYCLING' | 'WALKING';

interface TravelModeSelectorProps {
  selected: TravelMode;
  onSelect: (mode: TravelMode) => void;
}

export function TravelModeSelector({ selected, onSelect }: TravelModeSelectorProps) {
  const modes = [
    { value: 'DRIVING' as TravelMode, icon: Car, label: 'Drive' },
    { value: 'TRANSIT' as TravelMode, icon: Bus, label: 'Transit' },
    { value: 'BICYCLING' as TravelMode, icon: Bike, label: 'Bike' },
    { value: 'WALKING' as TravelMode, icon: Footprints, label: 'Walk' },
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[hsl(var(--foreground))] mb-2">
        Travel Mode
      </label>
      <div className="grid grid-cols-4 gap-2">
        {modes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className={`
              flex flex-col items-center justify-center p-3 rounded-lg border transition-all
              ${
                selected === value
                  ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]'
                  : 'bg-white border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]'
              }
            `}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TravelModeSelector;
