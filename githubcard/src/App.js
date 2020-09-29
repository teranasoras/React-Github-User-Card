import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    Username: '',
    name: '',
    picture: '',
    url: ''
  };
  
  componentDidMount() {
    this.fetchuser(this.state);
  }

  fetchuser = () => {
    fetch(`https://api.github.com/users/teranasoras`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          Username: data.login,
          name: data.name,
          picture: data.avatar_url,
          url: data.html_url
        });
      })
      .catch((err) => console.log("error: ", err));
  };



  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>the user is {this.state.Username}</p>
      <p>their actual name is {this.state.name}</p>
      <img src = {this.state.picture}/>
      <p>go to their page at {this.state.url}</p>
      </header>
    </div>
  );
  }
}

export default App;
