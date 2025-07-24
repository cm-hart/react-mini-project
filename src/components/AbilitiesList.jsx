function AbilitiesList({ abilities }) {
  return (
    <div className="abilities-section">
      <h4>Abilities:</h4>
      <ul className="abilities-list">
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li> // Using index as key is okay for static lists
        ))}
      </ul>
    </div>
  );
}

export default AbilitiesList;
