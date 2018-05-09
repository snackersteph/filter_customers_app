class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchQuery: '',
      customers: this.props.customers
    }  
  }

  componentDidMount(){
    // console.log("all the customers")
    // console.log(this.props.customers)
  }

  render () {
    return (
    <div id="main-app">
      <h1>Search for Customers</h1>
      <Search companies={this.props.companies}/>
      <ListResults customers={this.state.customers} />
    </div>
  )}
}
