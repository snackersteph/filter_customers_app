class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }  
  }

  componentDidMount(){
    // console.log("all the customers")
    // console.log(this.props.customers)
  }

  render () {
    return (
    <div>
      <Search />
      <ListResults customers={this.props.customers} />
    </div>
  )}
}
