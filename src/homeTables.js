import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        <ul> 
        <li><Link to="/contact-list">
           contact list     
          </Link>
          </li>
          <li> <Link to="/reserve-list">
            Reserve list
          </Link>
          </li>
          </ul>
      </div>
    );
  }
  
export default class HomeTables extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showTables: false}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showTables: !prevState.showTables
      }));
    }
    
    render() {
      return (
        <div>
          <button onClick={this.handleToggleClick}>
            {this.state.showTables ? 'Hide' :'Show' }
          </button>
            <WarningBanner warn={this.state.showTables} />
        </div>
      );
    }
  }
  