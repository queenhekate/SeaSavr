import { useState } from 'react';
import axios from 'axios';

const PollutionForm = () => {
  const [formData, setFormData] = useState({
    pollutionType: '',
    description: '',
    latitude: '',
    longitude: '',
    locationName: '',
    severity: '',
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
      severity: formData.severity,
      location: {
        name: formData.locationName,
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
    <div className="pollutionForm__container">
      <h2 className="pollutionForm__title">Report Pollution</h2>
      <form onSubmit={handleSubmit} className="pollutionForm__form">
        
        <input
          type="text"
          name="pollutionType"
          placeholder="Type of Pollution (e.g., Oil Spill)"
          value={formData.pollutionType}
          onChange={handleChange}
          className="pollutionForm__input"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="pollutionForm__textarea"
        />

        <input
        type="text"
        name="locationName"
        placeholder="Location Name"
        value={formData.locationName}
        onChange={handleChange}
        className="pollutionForm__input"
        />

        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
          className="pollutionForm__input"
          required
        />

        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
          onChange={handleChange}
          className="pollutionForm__input"
          required
        />

        <input
          type="text"
          name="photoUrl"
          placeholder="Photo URL (optional)"
          value={formData.photoUrl}
          onChange={handleChange}
          className="pollutionForm__input"
        />

        <select
        name="severity"
        value={formData.severity}
        onChange={handleChange}
        className="pollutionForm__select"
        required
        >
        <option value="">Select Severity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select>

        <button
          type="submit"
          className="pollutionForm__button"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default PollutionForm;
