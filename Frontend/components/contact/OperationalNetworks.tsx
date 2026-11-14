interface CityNode {
  id?: number;
  name?: string;
}

interface RegionNodeItem {
  id?: number;
  region?: string;
  cities?: CityNode[];
}

interface OperationalNetworksProps {
  data?: {
    networks?: RegionNodeItem[];
  }
}

import { MapWrapper } from './MapWrapper';

export function OperationalNetworks({ data }: OperationalNetworksProps) {
  if (!data || !data.networks || data.networks.length === 0) return null;

  return (
    <div id="map" className="mb-stack-lg reveal-on-scroll">
      <div className="mb-stack-lg">
        <span className="text-sm text-primary tracking-widest uppercase font-semibold">
          Global Presence
        </span>
        <h2 className="text-5xl font-extrabold mt-4 text-on-surface dark:text-white">Operational Networks</h2>
      </div>
      
      <div className="w-full">
        <MapWrapper networks={data.networks} />
      </div>
    </div>
  );
}
