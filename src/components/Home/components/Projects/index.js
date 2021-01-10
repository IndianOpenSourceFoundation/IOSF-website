import React, { useState } from 'react';
import './styles.css';
import { Container, Grid } from '@material-ui/core';

import ProjectDetail from './components/ProjectDetail'

const Projects = () => {
  const [ projectDetails ] = useState(
    [
      {
        project_id: 1,
        project_title: "Dynamic",
        project_description: "A command line utility that can connect to an external databases, also fetch suggestions from different developer communities like stack-overflow", 
        project_link: "https://github.com/IndianOpenSourceFoundation/dynamic-cli"
      },
      {
        project_id: 2,
        project_title: "Easy Styles",
        project_description: "A minimal CSS based UI library to make resuable design components and design systems",
        project_link: "https://github.com/IndianOpenSourceFoundation/easy-styles"
      },
      {
        project_id: 3,
        project_title: "Design Gallery",
        project_description: "Open source design gallery that showcases work of our fellow designers. Icons, logos, UI screens, illustrations you'll find em all here.", 
        project_link: "https://github.com/IndianOpenSourceFoundation/iosf-design"
      },
    ]
  )


  return ( 
    <section className="projects__section">
      <Container>
        <h3 className="projects__title">Projects we're working on </h3>
        <div className="projects__grid">
          <Grid container spacing={2}>
            {
              projectDetails && 
              (
                projectDetails.map(projectDetail => {
                  return(
                    <Grid key={projectDetail.project_id} item sm={4}>
                      <ProjectDetail title={projectDetail.project_title} description={projectDetail.project_description} url={projectDetail.project_link}  />
                    </Grid>
                  )
                })
              )
            }
          </Grid>
        </div>
      </Container>
    </section>
   );
}
 
export default Projects;