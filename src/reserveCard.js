import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReserveCard extends Component {
  render() {
    const { reserve, getReserve } = this.props;
    return (
      // <div className="reserve-card">
      //   <p className="reserve-card-title"></p>
        
   <div className="card-text">
     <tr>
          <th>{reserve.item}</th>
          <th>{reserve.requester}</th>
          <th> {reserve.starthate}</th>
          <th>{reserve.duration}</th>
          <th>{reserve.Comments}</th>
      </tr>
          
          <Link to="/edit-reserve">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              onClick={() => getReserve(reserve, true)}
            />
          </Link>
          <input type="button" value="Delete" className="edit-button" />
        </div>
       
        
    );
  }
}
export default ReserveCard;
