import React from "react";
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({ posts: data }))
  }

  handleDeletePost(id) {
    let updatedPostsList = this.state.posts.filter((post) => post.id !== id);
    this.setState({posts: updatedPostsList})
  }

  render() {
    return (
        <ul className="list">
          {this.state.posts.map((item) =>
              <li key={item.id} className="list-item">
                  <h2>{item.id}. {item.title}</h2>
                  <p>{item.body}</p>
                  <button className="list-item-button" onClick={() => this.handleDeletePost(item.id)}>Удалить</button>
              </li>)}
        </ul>
    )
  }
}

export default App;