import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './components/Hero/Hero';
import EventForm from './components/EventForm/EventForm';
import EventList from './components/EventList/EventList';
import SearchBar from './components/SearchBar/SearchBar';
import Chatbot from './components/Chatbot/Chatbot';
import Footer from './components/Footer/Footer';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [searchFilters, setSearchFilters] = useState({});

  useEffect(() => {
    fetchEvents();
  }, [searchFilters]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/events`, { params: searchFilters });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleAddEvent = async (eventData) => {
    try {
      const response = await axios.post(`${API_URL}/events`, eventData);
      setEvents([...events, response.data]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleUpdateEvent = async (eventData) => {
    try {
      const response = await axios.put(`${API_URL}/events/${editingEvent._id}`, eventData);
      setEvents(events.map(event => 
        event._id === editingEvent._id ? response.data : event
      ));
      setEditingEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${API_URL}/events/${id}`);
      setEvents(events.filter(event => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await axios.put(`${API_URL}/events/${id}`, { status });
      setEvents(events.map(event => 
        event._id === id ? response.data : event
      ));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Event Manager</h1>
      </header>
      
      <Hero />
      
      <main className="app-main">
        <div className="main-content">
          <EventForm 
            onSubmit={editingEvent ? handleUpdateEvent : handleAddEvent}
            editingEvent={editingEvent}
            onCancel={() => setEditingEvent(null)}
          />
          
          <SearchBar onSearch={setSearchFilters} />
          
          <EventList 
            events={events}
            onEdit={setEditingEvent}
            onDelete={handleDeleteEvent}
            onStatusChange={handleStatusChange}
          />
        </div>
        
        <div className="sidebar">
          <Chatbot />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;