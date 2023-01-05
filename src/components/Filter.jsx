const Filter = ({setPlayerFilter, playerFilter}) => {
    return (
        <div className="searchBar">
      <label htmlFor="search">Search Player:</label>
      <input
        type="text"
        id="search"
        value={playerFilter}
        placeholder="Type a name to search..."
        onChange={(e) => setPlayerFilter(e.target.value)}
      />
    </div>
    )
}

export default Filter;