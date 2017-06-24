import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div styleName="wrapper">
        <header>
          <ul>
            <li>
              How to Play
            </li>
            <li>
              Rules
            </li>
            <li>
              About Us
            </li>
            <li>
              Contact
            </li>
          </ul>
        </header>
          <div styleName="hey-turkey">
            <div styleName="hey-turkey-bird">

            </div>
            <div styleName="hey-turkey-speech">

            </div>
            <div styleName="hey-turkey-teams">
              <p>CHOOSE YOUR TEAM</p>
            </div>
            <div styleName="hey-turkey-choose">
              <div styleName="hey-turkey-choose-red">

              </div>
              <div styleName="hey-turkey-choose-blue">

              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default CSSModules(Home, styles);
