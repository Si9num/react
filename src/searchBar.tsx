import React from 'react';

function searchBar() {
  return (
    <div>
      <header>
        <div className="search-bar">
          <div>
            <input className="search-input" type="text" placeholder="Search" />
            <button className="search-button">Search</button>
          </div>
        </div>
      </header>
      <section className="card-container"></section>
    </div>
  );
}

export default searchBar;
