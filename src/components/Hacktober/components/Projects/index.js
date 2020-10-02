import React from 'react';
import './styles.css';

import { Container, Grid, Card, CardContent, CardActions, Link, Button } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

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
                <span>React</span>
                <CardContent>
                  <h4>IOSF Website</h4>
                  <p>Official website of Indian Open Source Foundation</p>
                </CardContent>
                <CardActions>
                  <Link>
                    <Button
                      endIcon={<GitHub />}
                    >
                      Contribute
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <span>CSS</span>
                <CardContent>
                  <h4>Easy Styles</h4>
                  <p>Simple CSS based utility for creating reusable styled components</p>
                </CardContent>
                <CardActions>
                  <Link>
                    <Button
                      endIcon={<GitHub />}
                    >
                      Contribute
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <span>Python</span>
                <CardContent>
                  <h4>Dynamic CLI</h4>
                  <p>A CLI based utility for the devs.</p>
                </CardContent>
                <CardActions>
                  <Link>
                    <Button
                      endIcon={<GitHub />}
                    >
                      Contribute
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card>
                <span>HTML & CSS</span>
                <CardContent>
                  <h4>IOSF Blog</h4>
                  <p>A CLI based utility for the devs.</p>
                </CardContent>
                <CardActions>
                  <Link>
                    <Button
                      endIcon={<GitHub />}
                    >
                      Contribute
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        
        </div>
      </Container>
    </div>
   );
}

export default Projects;