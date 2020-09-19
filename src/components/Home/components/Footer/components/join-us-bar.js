import React, { Component } from 'react'
import {
  Button,
} from "react-bulma-components";
export class JoinUs extends Component {
  render() {
    return (
      <div className="rows">
              <div className="column has-text-centered">
                <p className="has-text-white">
                  Join us as a contributor and associate with us in our journey
                  for making
                  {/* TODO: Replace inline styling with Bulma class */}
                  <strong className="has-text-white" style={{marginLeft:5,marginRight:5}}>
                    Open Source Contribution
                  </strong>
                  lit 🔥 and super &nbsp; powerful for the budding and already
                  existing developer community.
                </p>
              </div>
              <div className="column has-text-centered">
                <Button
                  className="footer__joinUsBtn button__join"
                  size="medium"
                  renderAs="a"
                  href="https://toolsiosf.typeform.com/to/fl45kmgs"
                >
                  JOIN US
                </Button>
              </div>
            </div>
    )
  }
}

export default JoinUs
