import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CatData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CatData: React.FC = () => {
  const [catData, setCatData] = useState<CatData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const response = await axios.get<CatData[]>('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'YOUR_API_KEY', // înlocuiește YOUR_API_KEY cu cheia ta API
          },
        });
        setCatData(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cat data');
        setLoading(false);
      }
    };

    fetchCatData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (catData) {
    return (
      <div>
        <h2>Random Cat</h2>
        <img src={catData.url} alt="A random cat" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    );
  }

  return null;
};

export default CatData;
