import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (type) => {
    this.setState({ type });
  }

  filterItem = (item) => {
    const { search, type } = this.state;
    return item.name.toLowerCase().search(search) !== -1 && (type === "All" || item.type === type);
  }

  render() {
    return (
      <div className="filter-list">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="filter-dropdown">
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => this.onFilter("All")}>All</Dropdown.Item>
            <br></br>
            <Dropdown.Item onClick={() => this.onFilter("Fruit")}>Fruit</Dropdown.Item>
            <br></br>
            <Dropdown.Item onClick={() => this.onFilter("Vegetable")}>Vegetable</Dropdown.Item>
            <br></br>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;