import React from 'react';
import Container from './Container';
import Section from './Section';
import Tile from './Tile';
import ListItem from './ListItem';
import Slider from './Slider';

const Home = () => (
    <Container>
      <Section title="Section Header" className="tiles">
        <Slider />
      </Section>
      <Section title="Section Header" className="list">
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
        <ListItem
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in justo fringilla."
          subtitle="Ut fringilla urna neque."
          label="Label"
        />
      </Section>
    </Container>
)

export default Home;
