import React, { useState, useEffect } from 'react';
import Todocolumn from './Components/todocolumn';
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortOption, setSortOption] = useState('priority'); 
  const [displayOption, setDisplayOption] = useState(false); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        console.log('API Data:', data);

        if (Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        } else {
          console.error('Data does not contain a valid tickets array:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleGroupByChange = (option) => {
    setGroupBy(option);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const handleDisplayToggle = () => {
    setDisplayOption(!displayOption);
  };

  return (
    <div>
      <div className='display'>
        {/* Dropdown for Display */}
        <label htmlFor="displayDropdown">Display:</label>
        <button
          id="displayDropdown"
          onClick={handleDisplayToggle}
        >
          &#9662; 
        </button>

        {/* Display Options */}
        {displayOption && (
          <div className="display-options">
            <div className='option-a'>
                {/* Dropdown for Grouping */}
              <label htmlFor="groupingDropdown">Grouping:</label>
              <select
                id="groupingDropdown"
                value={groupBy}
                onChange={(e) => handleGroupByChange(e.target.value)}
              >
                <option value='status'>By Status</option>
                <option value='user'>By User</option>
                <option value='priority'>By Priority</option>
              </select>
            </div>
            
            <div className='option-b'>
                {/* Dropdown for Ordering */}
              <label htmlFor="orderingDropdown">Ordering:</label>
              <select
                id="orderingDropdown"
                value={sortOption}
                onChange={(e) => handleSortOptionChange(e.target.value)}
              >
                <option value='priority'>By Priority</option>
                <option value='title'>By Title</option>
              </select>
            </div>
            
          </div>
        )}
      </div>

      <Todocolumn tickets={tickets} groupBy={groupBy} sortOption={sortOption} />
    </div>
  );
};

export default App;
