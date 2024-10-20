import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>SupportSpectrum</h1>
      <div id="searchBarContainer">
        <SearchBar />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}


const SearchBar = () => {
  // Sample list of items to search
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Orange'];

  // State to hold search query and filtered items
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
      setIsSubmitted(true); // Allow display of results after Enter is pressed
    }
  };

  return (
    <div>
      {/* Search input field */}
      <input
        type="text"
        placeholder="Find your benefits..."
        value={searchQuery}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        style={{ padding: '8px', width: '700px', height: '20px', marginBottom: '20px' }}
      />

      {/* Display filtered items only after Enter is pressed */}
      {isSubmitted && (
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

// poop

export default App
