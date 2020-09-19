import React, { Component } from 'react'
import "../footer.css";
import {
  Columns,
  Level,
} from "react-bulma-components";
import SocialLinks from '../data/social-links';
export class ConnectBar extends Component {
  render() {
    let socialLinks = SocialLinks.map((link) => {
      return (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className={'btn btn-floating z-depth-0 transparent grey-text ' + link.title.toLowerCase()}
          >
          <i className={"fab grey-text fa-"+link.title.toLowerCase()}></i>
          </a>
      )
    })

    return (
      <div className="footer__copyright">
              <Level>
                <Level.Side align="left">
                  <Level.Item className="justify__text__left">
                    <p>
                      {/* TODO: Replace inline styling with Bulma class */}
                      Mail us at<a href="mailto:ping@iosf.com" style={{marginLeft:5}}>ping@iosf.com</a>
                      <br />
                      &copy; Indian Open Source Foundation, {new Date().getFullYear()}
                    </p>
                  </Level.Item>
                </Level.Side>
                <Level.Side align="right">
                  <Level.Item>
                    <Columns.Column size={12}>
                      <h4>Connect</h4>
                      <div className="footer__socialLinks">
                        {socialLinks}
                </div>
              </Columns.Column>
            </Level.Item>
          </Level.Side>
        </Level>
      </div>
    )
  }
}

export default ConnectBar
