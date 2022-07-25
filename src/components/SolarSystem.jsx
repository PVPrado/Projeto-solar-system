import React from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planeta) => (
          <PlanetCard
            key={ planeta.id }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
