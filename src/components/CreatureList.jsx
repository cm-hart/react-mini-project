import CreatureCard from './CreatureCard.jsx';

function CreatureList({ creatures }) {
  return (
    <section className="creature-list">
      <h2>Explore Creatures</h2>
      {creatures.map((creature) => (
        <CreatureCard key={creature.id} creature={creature} />
      ))}
    </section>
  );
}

export default CreatureList;
