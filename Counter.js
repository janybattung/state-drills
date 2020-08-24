import React from 'react';

class Counter extends React.Component {
    state = {
      count: 0
    };

    handleButtonClick() {
        console.log(this.state.count)
      }

    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
          {/* <button
            onClick={function() { console.log('clicked!') }}
          > */}
            Add 1
          </button>
        </div>
      )
    }
  }
  export default Counter;