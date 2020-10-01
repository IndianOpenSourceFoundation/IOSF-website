import React from 'react';
import './styles.css';

import { Container, Grid, Card, CardContent, CardAction } from '@material-ui/core';

const Projects = () => {
  return ( 
    <div id="projects__section" className="projects__section">
      <Container>
        <h3 className="projects__title">Projects for Hacktober'20</h3>
        <p className="projects__subtitle">Contribute to our projects, raise a PR and get a chance to win <strong>Limited Editon Hacktober T-shirt </strong> and <strong>Certification of Contribution</strong> from us.</p>
        <div className="projects__list">
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <h4>Project Title</h4>
                  <p>lorem ispum dolor sit ammet</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <h4>Project Title</h4>
                  <p>lorem ispum dolor sit ammet dolo sir ammet</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <CardContent>
                  <h4>Project Title</h4>
                  <p>lorem ispum dolor sit ammet</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        
        </div>
      </Container>
    </div>
   );
}

export default Projects;