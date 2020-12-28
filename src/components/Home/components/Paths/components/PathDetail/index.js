import React from 'react';
import "./styles.css";

import { Card, CardContent, CardActions, Link, Button, Divider } from '@material-ui/core'

const PathDetail = ( { title, content, tags } ) => {
  console.log(tags)

  return (
    <Card className="pathDetail__card">
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
        {
          tags && 
          (
            tags.map((tag, index) => <Button className="pathDetail__tag" key={index} variant="contained" size="small" disabled>{tag}</Button>)
          )
        }
      </CardContent>
      <Divider />
      <CardActions>
        <Link>
          <Button 
            variant="contained"
          >
            START PATH
          </Button>
        </Link>
        <Link>
          <Button>
            More Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default PathDetail;