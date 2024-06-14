import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, categoryName: "İçecekler" },
        { id: 2, categoryName: "Soslar" },
        { id: 3, categoryName: "Tatlilar" }
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(
            category => (<ListGroupItem
              active={this.props.selectedCategory === category.id}
              onClick={() => this.props.changeCategory(category)} key={category.id}>
              {category.categoryName}
            </ListGroupItem>))}
        </ListGroup>
      </div>
    )
  }
}
