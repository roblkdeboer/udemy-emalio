import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
  }
  render() {
    return (
      <>
        <nav>
          <div class="nav-wrapper">
            <a
              href="/"
              className="brand-logo"
              style={{ 'margin-left': '1rem' }}
            >
              Emalio
            </a>
            <a
              href="/#"
              data-target="mobile-demo"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/">Login With Google</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/">Login With Google</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Header;
