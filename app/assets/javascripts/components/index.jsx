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
    results = get_filtered_results(event)
    this.setState({
      searchQuery: results,
    });
  }

  render () {
    return (
    <div id="main-app">
      <h1>Search for Customers</h1>
      <Search companies={this.props.companies} getResults={this.handleChange}/>
      <ListResults customers={this.state.customers} />
    </div>
  )}
}
