import React from 'react';
import Tile from './Tile';
import AliceCarousel from 'react-alice-carousel';

const Slider = () => {
  const responsive = {
    0: { items: 1 },
    769: { items: 2 },
    1024: { items: 3 },
  }

  return (
    <AliceCarousel
      mouseTrackingEnabled
      responsive={responsive}
      infinite={false}
      buttonsDisabled={true}
    >
      <Tile
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
        date="19/02/2020"
      />
      <Tile
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
        date="19/02/2020"
      />
      <Tile
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
        date="19/02/2020"
      />
    </AliceCarousel>
  );
};

export default Slider;
