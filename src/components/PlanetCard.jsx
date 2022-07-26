import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    // props
    const { planetImage, planetName } = this.props;

    return (
      <section>
        <div data-testid="planet-card">
          <p data-testid="planet-name">{planetName}</p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </section>
    );
  }
}
PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
