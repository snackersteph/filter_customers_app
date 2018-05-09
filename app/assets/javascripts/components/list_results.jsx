import React from 'react';
import ReactDOM from 'react-dom';

class ListResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th> 
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {this.props.customers.map( (customer, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{customer.firstname}</td>
                        <td>{customer.lastname}</td>
                        <td>{customer.company}</td>
                      </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}