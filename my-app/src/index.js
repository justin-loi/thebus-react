import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TheBus extends React.Component {

  render() {
    return (
        <h1>Bus!</h1>
    );
  }
}

ReactDOM.render(<TheBus />, document.getElementById('root'));