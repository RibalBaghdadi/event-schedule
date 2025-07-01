import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    search: '',
    startDate: '',
    endDate: '',
    location: ''
  });

  const handleChange = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value
    };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      search: '',
      startDate: '',
      endDate: '',
      location: ''
    };
    setFilters(emptyFilters);
    onSearch(emptyFilters);
  };

  return (
    <div className="search-bar-container">
      <h3>Search Events</h3>
      <div className="search-form">
        <div className="search-row">
          <div className="search-group">
            <input
              type="text"
              name="search"
              placeholder="Search by title..."
              value={filters.search}
              onChange={handleChange}
            />
          </div>
          <div className="search-group">
            <input
              type="text"
              name="location"
              placeholder="Search by location..."
              value={filters.location}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="search-row">
          <div className="search-group">
            <label>From Date:</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="search-group">
            <label>To Date:</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
            />
          </div>
          <button onClick={clearFilters} className="clear-btn">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;