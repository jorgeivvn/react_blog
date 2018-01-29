import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment.js'
import './App.css';

class Post extends Component {
  constructor (props) {
      super()
      this.state = {
        comments: ['what the??', 'yassss', 'nah.']
      }
    }
    handleClick (e) {
       let body = prompt("Enter new body");
this.setState({
body: body
})
}
  render() {
    return (
      <div className="Post">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blog React</h1>
        </header>
        <form>
          <label>
            Title:
            <input type="text"/>
            Author:
            <input type="text"/>
            Body:
            <input type="text"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        <p>{this.state.comments.map(function(comment){
          return <Comment body={comment} />
        })}
        </p>
        <button onClick={(e) => this.handleClick(e)}>Click Right Here, Playa!</button>

        </div>
    );
  }
}

export default Post;
