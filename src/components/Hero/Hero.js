import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Portfolio Site <br />
          by Anthony Stenson
        </SectionTitle>
        <SectionText>
        Self taught developer 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;