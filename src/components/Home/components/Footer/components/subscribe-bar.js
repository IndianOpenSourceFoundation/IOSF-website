import React, { Component } from 'react'
import {
  Columns,
  Button,
} from "react-bulma-components";
import GeneralLinks from '../data/general-links';
export class SubscribeBar extends Component {


  render() {
    let links = GeneralLinks.map((link) => {
      return (
        <li>
          <a className="footer-link grey-text text-lighten-1" href={link.link} >
            {link.title}
          </a>
        </li>
      )
  
    })
    return (
      <div className="mt-4">
              <Columns>
                <Columns.Column size={3}>
                  <h4>General Links</h4>
                  <ul className="footer__links">
                    {links}
                  </ul>
                </Columns.Column>
                <Columns.Column size={4}>
                  <h4>Subscribe</h4>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          placeholder="Enter your email, foo@bar.com"
                        />
                      </div>
                    </div>
                    <Button
                      className="footer__subscribeBtn "
                      color="primary"
                      size="small"
                    >
                      SUBSCRIBE
                    </Button>
                  </form>
                </Columns.Column>

                <Columns.Column>
                  <div className="language">
                    <h4>Language</h4>
                    <div className="select">
                      <select>
                        <option>English</option>
                      </select>
                    </div>
                  </div>
                </Columns.Column>
              </Columns>
            </div>
    )
  }
}

export default SubscribeBar
