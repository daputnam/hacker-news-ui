import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './index.css';

const NewsItem = (data) => {
  return (
    <div>HackerItem here</div>
  );
}

class HackerNews extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <div>
          {data.map(item => (
            <NewsItem item={item} />
          ))}
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

