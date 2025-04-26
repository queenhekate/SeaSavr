import { useState } from 'react';
import axios from 'axios';

const PollutionForm = () => {
  const [formData, setFormData] = useState({
    pollutionType: '',
    description: '',
    latitude: '',
    longitude: '',
    photoUrl: '', // You can extend this later for file upload
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const reportData = {
      pollutionType: formData.pollutionType,
      description: formData.description,
      photoUrl: formData.photoUrl,
      location: {
        type: 'Point',
        coordinates: [
          parseFloat(formData.longitude),
          parseFloat(formData.latitude),
        ],
      },
    };

    try {
      await axios.post('http://localhost:5000/api/pollution', reportData);
      alert('Pollution report submitted!');
      setFormData({
        pollutionType: '',
        description: '',
        latitude: '',
        longitude: '',
        photoUrl: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error submitting report.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Report Pollution</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="pollutionType"
          placeholder="Type of Pollution (e.g., Oil Spill)"
          value={formData.pollutionType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="photoUrl"
          placeholder="Photo URL (optional)"
          value={formData.photoUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default PollutionForm;
