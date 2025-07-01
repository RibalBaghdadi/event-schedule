import { useState, useEffect } from 'react';
import './EventForm.css';

const EventForm = ({ onSubmit, editingEvent, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    status: 'upcoming'
  });

  useEffect(() => {
    if (editingEvent) {
      setFormData({
        title: editingEvent.title,
        date: new Date(editingEvent.date).toISOString().slice(0, 16),
        location: editingEvent.location,
        description: editingEvent.description || '',
        status: editingEvent.status
      });
    } else {
      setFormData({
        title: '',
        date: '',
        location: '',
        description: '',
        status: 'upcoming'
      });
    }
  }, [editingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editingEvent) {
      setFormData({
        title: '',
        date: '',
        location: '',
        description: '',
        status: 'upcoming'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="event-form-container">
      <h2>{editingEvent ? 'Edit Event' : 'Add New Event'}</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="title">Event Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date & Time *</label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="upcoming">Upcoming</option>
              <option value="attending">Attending</option>
              <option value="maybe">Maybe</option>
              <option value="declined">Declined</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {editingEvent ? 'Update Event' : 'Add Event'}
          </button>
          {editingEvent && (
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EventForm;