import React from 'react';
import './styles.css';

import { Container, Link, Button } from '@material-ui/core';

const JoinusBanner = () => {
  return ( 
    <section className="joinusBanner__section">
      <Container>
        <p>Join us as a contributor and associate with us in our journey for making Open Source Contribution lit <span role="img" aria-label="fire emoji">🔥</span> and super powerful for the budding and already existing community.</p>
        <Link
          href="https://lnkd.in/eWYs6nm"
        >
          <Button
            variant="contained"
          >
            JOIN US
          </Button>
        </Link>
      </Container>
    </section>
   );
}
 
export default JoinusBanner;