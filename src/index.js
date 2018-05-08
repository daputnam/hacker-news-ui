import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';

class HackerNews extends Component {
  render() {
    return (
      <div className="main">
        title bar here
        <div>
          list of newsItems here
        </div>
      </div>
    );
  }
}
const data = [
  {
    title: "Why I'm suing the government",
    website: "www.bunniestudios.com",
    points: 1233,
    userName: "Ivank",
    comments: 121
  },
  {
    title: "Why I'm suing the government",
    website: "www.bunniestudios.com",
    points: 1233,
    userName: "Ivank",
    comments: 121
  }
];
ReactDOM.render(<HackerNews />, document.getElementById('root'));

