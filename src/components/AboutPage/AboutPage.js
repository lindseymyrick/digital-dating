import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Dating Digitally is a full-stack web application that allows users to connect and grow relationships virtually. 
        It replicates traditional, in-person dating experiences that may be impossible due to distance or factors like 
        social distancing. 
      </p>
    </div>
  </div>
);

export default AboutPage;
