import React from "react";

const Card = ({ post }) => (
    <div className="card">
      <img className="profile-photo" src={post.profilePhoto} alt={post.user} />
      <div className="user-name">{post.user}</div>
      <div className="time-stamp">
        {new Date(post.timestamp).toLocaleString()}
      </div>  
      <div className="post-title">{post.title}</div>
      <img className="post-cover" src={post.cover} alt={post.title} />
      <button id="read-more-btn">Read more...</button>
    </div>
);  

export default Card;


// this is a functional component

// import React, { Component } from "react";
// import "./App.css";
// import Card from "./Card";

// class App extends Component {
//   state = {
//     post: {
//       id: "soc01a",
//       title: "Do Pyramids hold secrets? A Cambridge researcher explains",
//       timestamp: "2019-11-25T08:47:54.735Z",
//       cover:
//         "https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501_960_720.jpg",
//       profilePhoto: "https://randomuser.me/api/portraits/men/10.jpg",
//       user: "Matt Simon"
//     }
//   };
//   render() {
//     return (
//       <div className="app">
//         <Card post={this.state.post} />
//       </div>
//     );
//   }
// }

// export default App;
