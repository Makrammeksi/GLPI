import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ContactCard from "./contactCard";
import AddContact from "./addContact";
import axios from "axios";

export default class AppContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      mobile: "",
      city: "",
      contactlist: []
    };
  }
  getContacts = () => {
    axios.get("/contacts").then(res =>
      this.setState({
        contactlist: res.data
      })
    );
  };
  addContact = () => {
    axios
      .post("/add-contact", {
        fullName: this.state.fullName,
        email: this.state.email,
        mobile: this.state.mobile,
        city: this.state.city
      })
      .then(this.getContacts);
    this.add();
  };
  editContact = () => {
    axios
      .put("/modify-contact/" + this.state.id, {
        fullName: this.state.fullName,
        email: this.state.email,
        mobile: this.state.mobile,
        city: this.state.city
      })
      .then(this.getContacts);
    this.add();
  };
  add = () => {
    this.setState({
      edit: false,
      fullName: "",
      email: "",
      mobile: "",
      city: ""
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getPerson = (contact, edit) => {
    this.setState({
      id: contact._id,
      fullName: contact.fullName,
      email: contact.email,
      mobile: contact.mobile,
      city: contact.city,
      edit
    });
  };
  componentDidMount = () => {
    this.getContacts();
    // this.getReserves();
  };
  render() {
    return (
      <div>

      
        <Route
          path="/contact-list"
          render={() => (
            <div className="contact-list">
              {this.state.contactlist.map(el => (
                <ContactCard contact={el} getPerson={this.getPerson} />
              ))}
            </div>
          )}
        />
 <Route
          path="/(new-contact|edit-contact)/"
          render={() => (
            <AddContact
              handleChange={this.handleChange}
              action={this.state.edit ? this.editContact : this.addContact}
              edit={this.state.edit}
              contact={this.state}
            />
          )}
        /> 


      </div>
    );
  }
}
