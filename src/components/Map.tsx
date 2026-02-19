import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';

const Map = () => {
  return (
    <div className="space-y-4">
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border/50">
        <iframe
          title="Office location map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.2692%2C6.4598%2C3.2892%2C6.4798&layer=mapnik&marker=6.4698%2C3.2792"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Card className="p-4 bg-card/80 border-border/50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">IRIDESCENT INTERNET SOLUTIONS</h4>
            </div>
            <p className="text-sm text-muted-foreground">2nd Avenue, 23 Road, M Close, Festac Town, Lagos, Nigeria</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('https://www.openstreetmap.org/?mlat=6.4698&mlon=3.2792#map=16/6.4698/3.2792', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              OpenStreetMap
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('https://maps.google.com/?q=6.4698,3.2792', '_blank')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Google Maps
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Map;