import AbilitiesList from './AbilitiesList.jsx'

function CreatureCard({ creature }) {
  return (
    <article className="creature-card">
      <h3>{creature.name}</h3>
      <p>
        <strong>Habitat:</strong> {creature.habitat}
      </p>
      <p>{creature.description}</p>
      <AbilitiesList abilities={creature.abilities} />
    </article>
  );
}

export default CreatureCard;
