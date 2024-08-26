export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  isLoading,
  loadingText,
}) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="follback-text">{loadingText}</p>}
      {places.length === 0 && !isLoading && (
        <p className="follback-text">{fallbackText}</p>
      )}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}