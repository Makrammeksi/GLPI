import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';


class AppReserve extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fullName: '',
        email: '',
        mobile: '',
        city:'',
        contactlist: [],
        reservelist:[],
        id: '',
        
        edit: false
      };
    }

}
export default AppReserve;