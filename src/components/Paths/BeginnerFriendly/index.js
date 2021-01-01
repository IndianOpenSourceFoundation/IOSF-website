import React from 'react'
import './styles.css';

import { Card, CardContent } from '@material-ui/core';

const BeginnerFriendly = () => {
  return ( 
      <section className="beginnerFriendly__section">
        <Card>
          <CardContent>
            <img src="/img/paths/coffee.svg" height="80px" alt="coffee-icon" />
            <h3>Good things take time</h3>
            <p>This is still under construction will update once done!</p>
          </CardContent>
        </Card>
      </section>
   );
}
 
export default BeginnerFriendly;