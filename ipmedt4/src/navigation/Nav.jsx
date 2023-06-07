import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="./pages/page1">Page 1</a>
            </li>
            <li>
              <a href="./pages/page2">Page 2</a>
            </li>
            <li>
              <a href="./pages/page3">Page 3</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
