import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchQuery: '',
      customers: this.props.customers
    }  
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    // console.log("all the customers")
    // console.log(this.props.customers)
  }

  handleChange(event){
    if (this.state.searchQuery == event){
      //query didnt change
      return false;
    }
    this.props.history.replace(`/customers?firstname='${event.target.value}&lastname=${event.target.value}`);
  }

  render () {
    return (
    <div id="main-app">
      <h1>Search for Customers</h1>
      <Search companies={this.props.companies} handleChange={this.handleChange}/>
      <ListResults customers={this.state.customers} />
    </div>
  )}
}
