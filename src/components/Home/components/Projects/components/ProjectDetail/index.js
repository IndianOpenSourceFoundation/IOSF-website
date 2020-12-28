import React from 'react';
import "./styles.css";

import { Card, CardContent, CardActions, Button, Link } from '@material-ui/core'

const ProjectDetail = ( {title, description } ) => {
  return (
    <Card className="projectDetail__card">
      <CardContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </CardContent>
      <CardActions>
        <Link>
          <Button>
            VIEW PROJECT
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProjectDetail;