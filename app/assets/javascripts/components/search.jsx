class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <div className="input-group">
            <input type="text" className="form-control" aria-label="..." />
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" 
                      aria-expanded="false">Company<span className="caret"></span></button>
              <ul className="dropdown-menu">
                {this.props.companies.map( (company, index) => {
                  return <li key={index}><a href="#">{company.title}</a></li>
                })}
                <li role="separator" className="divider"></li>
                <li><a href="#">All Companies</a></li>
              </ul>
            </div>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" 
                      aria-expanded="false">Sort by<span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">First Name, Descending</a></li>
                <li><a href="#">First Name, Ascending</a></li>
                <li><a href="#">Last Name, Descending</a></li>
                <li><a href="#">Last Name, Ascending</a></li>
                <li><a href="#">Company Name, Descending</a></li>
                <li><a href="#">Company Name, Ascending</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}