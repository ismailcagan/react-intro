import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList"
import { Component } from "react";

export default class App extends Component {
  state={ 
    selectedCategory:"" 
  }
    changeCategory =(category)=>
      {
        this.setState({selectedCategory:category.id})
      }

  render() {
    let productInfo = {
      title: "Ürün Listesi",
    }
    let categoryInfo = {
      title: "Category Listesi",
    }
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList selectedCategory ={this.state.selectedCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

