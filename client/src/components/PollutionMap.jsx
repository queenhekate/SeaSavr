// src/components/PollutionMap.jsx

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const PollutionMap = () => {
  const [pollutionData, setPollutionData] = useState([]);

  // Fetch pollution reports from the backend
  useEffect(() => {
    const fetchPollutionReports = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pollution');
        setPollutionData(response.data);
      } catch (error) {
        console.error('Error fetching pollution data:', error);
      }
    };

    fetchPollutionReports();
  }, []);

  return (
    <MapContainer
      center={[32.7157, -117.1611]} // Default to San Diego
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {pollutionData.map((report) => (
        <Marker
          key={report._id}
          position={[
            parseFloat(report.location.lat),
            parseFloat(report.location.lng),
          ]}
        >
          <Popup>
            <h3>{report.pollutionType}</h3>
            <p>Location: {report.location.name}</p>
            <p>Severity: {report.severity}</p>
            {report.photoUrl && (
              <img src={report.photoUrl} alt="Pollution Photo" width="200" />
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PollutionMap;
