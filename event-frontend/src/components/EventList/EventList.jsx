import './EventList.css';

const EventList = ({ events, onEdit, onDelete, onStatusChange }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      upcoming: '#007bff',
      attending: '#28a745',
      maybe: '#ffc107',
      declined: '#dc3545'
    };
    return colors[status] || '#6c757d';
  };

  if (events.length === 0) {
    return (
      <div className="event-list-container">
        <h3>Your Events</h3>
        <div className="no-events">
          <p>No events found. Add your first event above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-list-container">
      <h3>Your Events ({events.length})</h3>
      <div className="event-list">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <div className="event-header">
              <h4>{event.title}</h4>
              <div className="event-actions">
                <select
                  value={event.status}
                  onChange={(e) => onStatusChange(event._id, e.target.value)}
                  className="status-select"
                  style={{ borderColor: getStatusColor(event.status) }}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="attending">Attending</option>
                  <option value="maybe">Maybe</option>
                  <option value="declined">Declined</option>
                </select>
                <button onClick={() => onEdit(event)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => onDelete(event._id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
            
            <div className="event-details">
              <div className="event-meta">
                <span className="event-date">📅 {formatDate(event.date)}</span>
                <span className="event-location">📍 {event.location}</span>
              </div>
              
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
              
              <div className="event-status">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(event.status) }}
                >
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;