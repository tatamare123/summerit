import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface LocationData {
  country_name: string;
  state_prov: string;
  city: string;
  latitude: number;
  longitude: number;
  ip: string;
}

const LocationDataComponent: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('YOUR_MICROSERVICE_URL/getLocation');
        setLocation(response.data);
      } catch (err) {
        setError('Failed to fetch location: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (location) {
    return (
      <div>
        <p><strong>Country:</strong> {location.country_name}</p>
        <p><strong>State/Province:</strong> {location.state_prov}</p>
        <p><strong>City:</strong> {location.city}</p>
        <p><strong>Latitude:</strong> {location.latitude}</p>
        <p><strong>Longitude:</strong> {location.longitude}</p>
        <p><strong>IP:</strong> {location.ip}</p>
      </div>
    );
  }

  return null;
};

export default LocationDataComponent;
