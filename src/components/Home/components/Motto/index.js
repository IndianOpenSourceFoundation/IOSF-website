import React from 'react';
import "./styles.css";

import { Container, Grid, Paper } from '@material-ui/core';

const Motto = () => {
  return ( 
    <div className="motto__section">
      <Container>
        <h2 className="motto__title">Together Let's</h2>
        <div className="motto__grid">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Paper>
                <div className="motto__item">
                  <div className="motto__item_header">
                    <img src="/img/home/learn_avatar.svg" alt="motto-learn" />
                    <h4>Learn</h4>
                  </div>
                  <p>There's always a room for learning here. We are constantly learning new skills and concepts at all levels which help us increase the quality of our products.</p>
                </div>
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper>
                <div className="motto__item">
                  <div className="motto__item_header">
                    <img src="/img/home/contribute_avatar.svg" alt="motto-contribute" />
                    <h4>Contribute</h4>
                  </div>
                  <p>An active community of contributors that are passionate about product development and want to create something big.</p>
                </div>
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper>
                <div className="motto__item">
                  <div className="motto__item_header">
                    <img src="/img/home/mentor_avatar.svg" alt="motto-mentor" />
                    <h4>Mentor</h4>
                  </div>
                  
                  <p>IOSF loves mentoring sessions. It gives us an opportunity to share knowledge amongst fellow developers and encourage them into product development.</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
 
export default Motto;