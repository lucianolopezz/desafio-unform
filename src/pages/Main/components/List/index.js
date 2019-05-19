import React from 'react';

import { Container, Link } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../../../store/ducks/products';

function List({ products, markedProduct, deleteProduct }) {

  function handleEdit(index) {
    markedProduct(index);
  }

  function handleDelete(index) {
    deleteProduct(index);
  }

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Categoria</th>
            <th>Imagem</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {products && products.data.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.url_image} width="35" alt="" />
              </td>
              <td>
                <Link href="javascript:void(0)" onClick={() => handleEdit(index)}>Edit</Link>
                <Link href="javascript:void(0)" onClick={() => handleDelete(index)}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(List);
