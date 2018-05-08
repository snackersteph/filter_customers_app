class ListResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ol>
        {this.props.customers.map( (customer, index) => {
          return <li key={index}>{customer.firstname} {customer.lastname}</li>
        })}
        </ol>
      </div>
    );
  }
}