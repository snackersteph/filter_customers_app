class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(e) {
    this.setState({
      current: e.target.value
    })
    console.log(e.target.value)
    window.history.pushState(null, null, `http://0.0.0.0:3000/customers?firstname=${e.target.value}`)
    window.location.reload(null, null, `http://0.0.0.0:3000/customers?firstname=${e.target.value}`)
  }

  handleCompany(e) {
    console.log(e.target.dataset.value)
    window.history.pushState(null, null, `http://0.0.0.0:3000/customers?company=${e.target.dataset.value}`)
    window.location.reload(null, null, `http://0.0.0.0:3000/customers?company=${e.target.dataset.value}`)
  }

  handleClick(e) {
    console.log(e.target.dataset.value)
    window.history.pushState(null, null, `http://0.0.0.0:3000/customers?${e.target.dataset.value}`)
  }

  render() {
    return (
      <div>
          <div className="input-group">
            <input type="text" className="form-control" aria-label="..." value={this.state.current} onChange={this.handleSearch} />
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" 
                      aria-expanded="false">Company<span className="caret"></span></button>
              <ul className="dropdown-menu">
                {this.props.companies.map( (company, index) => {
                  return <li key={index}><a data-value={company.title} onClick={this.handleCompany}>{company.title}</a></li>
                })}
                <li role="separator" className="divider"></li>
                <li><a data-value={''} onClick={this.handleCompany}>All Companies</a></li>
              </ul>
            </div>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" 
                      aria-expanded="false">Sort by<span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li ><a data-value="First Name, Descending" onClick={this.handleClick}>First Name, Descending</a></li>
                <li ><a data-value="First Name, Ascending" onClick={this.handleClick}>First Name, Ascending</a></li>
                <li><a data-value="Last Name, Descending" onClick={this.handleClick}>Last Name, Descending</a></li>
                <li><a data-value="Last Name, Ascending" onClick={this.handleClick}>Last Name, Ascending</a></li>
                <li><a data-value="Company Name, Descending" onClick={this.handleClick}>Company Name, Descending</a></li>
                <li><a data-value="Company Name, Ascending" onClick={this.handleClick}>Company Name, Ascending</a></li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}