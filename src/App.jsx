import CreatureList from './components/CreatureList.jsx';
import './App.css';

function App() {
  const creaturesData = [
    {
      id: 1,
      name: 'Glimmerwing Dragon',
      habitat: 'Cloud Peaks',
      abilities: ['Fire Breath', 'Flight', 'Illusion Weaving'],
      description:
        'A majestic dragon known for its shimmering scales and deceptive illusions.',
    },
    {
      id: 2,
      name: 'Whisperwood Dryad',
      habitat: 'Ancient Forests',
      abilities: ["Nature's Embrace", 'Camouflage', 'Root Control'],
      description:
        'Guardians of old forests, capable of merging with trees and controlling plant life.',
    },
    {
      id: 3,
      name: 'Deep-Sea Leviathan',
      habitat: 'Abyssal Trenches',
      abilities: ['Crushing Pressure', 'Bioluminescence', 'Sonic Shriek'],
      description:
        'Giant creatures of the deep, adapted to extreme pressures and emitting blinding light.',
    },
  ];

  return (
    <div className="app-container">
      <h1>Creatures of Eldoria</h1>
      <CreatureList creatures={creaturesData} />
    </div>
  );
}

export default App;
