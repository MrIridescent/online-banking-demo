import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  // Iridescent Internet Solutions Location in Festac Town, Lagos
  const companyLocation: [number, number] = [3.2792, 6.4698]; // Festac Town coordinates

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox_token', mapboxToken);
      setIsTokenSet(true);
      initializeMap(mapboxToken);
    }
  };

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: 14,
      center: companyLocation,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add company location marker
    const marker = new mapboxgl.Marker({
      color: '#F5A623', // Primary orange color
      scale: 1.2
    })
      .setLngLat(companyLocation)
      .addTo(map.current);

    // Add popup for company location
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: 'custom-popup'
    })
      .setLngLat(companyLocation)
      .setHTML(`
        <div style="padding: 10px; background: hsl(220, 15%, 12%); border-radius: 8px; color: white;">
          <h3 style="margin: 0 0 8px 0; color: #F5A623; font-weight: bold;">IRIDESCENT INTERNET SOLUTIONS</h3>
          <p style="margin: 0; font-size: 12px; line-height: 1.4;">
            2nd Avenue, 23 Road, M Close<br>
            Festac Town, Lagos, Nigeria<br>
            <span style="color: #F5A623;">+234 807 115 5200</span>
          </p>
        </div>
      `)
      .addTo(map.current);

    // Fit map to show the area around the company
    map.current.fitBounds([
      [3.2692, 6.4598], // Southwest bound
      [3.2892, 6.4798]  // Northeast bound
    ], {
      padding: 50
    });
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setIsTokenSet(true);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full bg-card/50 border-border/50">
          <div className="text-center mb-6">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
            <p className="text-muted-foreground text-sm">
              To display our location map, please enter your Mapbox public token below. 
              You can get one free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
          </div>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleTokenSubmit}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!mapboxToken.trim()}
            >
              Load Map
            </Button>
          </div>

          <div className="mt-6 pt-4 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground mb-2">Our Location:</p>
            <p className="text-sm text-foreground font-medium">
              2nd Avenue, 23 Road, M Close<br />
              Festac Town, Lagos, Nigeria
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
      
      {/* Location Info Overlay */}
      <Card className="absolute top-4 left-4 p-4 bg-card/90 backdrop-blur-sm border-border/50">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <h4 className="font-semibold text-foreground text-sm">Our Office</h4>
            <p className="text-xs text-muted-foreground">Festac Town, Lagos</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Map;