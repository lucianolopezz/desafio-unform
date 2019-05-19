import React from 'react';
import { Form, Input, Select } from "@rocketseat/unform";
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../../../store/ducks/products';

import { Container, Title } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório!'),
  description: Yup.string().required('Descrição obrigatório!'),
  price: Yup.string().required('Preço obrigatório!'),
  amount: Yup.number().min(1, 'Minimo 1!').max(99, 'Maximo 99!'),
  category: Yup.string().required('Categoria obrigatório!'),
  url_image: Yup.string(),
});

function Add({ products: {edit, productSelected}, addProduct, editProduct }) {

  let initialData = {
    amount: 1,
  }

  if(edit) {
    initialData = {
      name: productSelected.name,
      amount: productSelected.amount,
      description: productSelected.description,
      price: productSelected.price,
      category: productSelected.category,
      url_image: productSelected.url_image,
    }
  }

  console.log('selected', productSelected)
  console.log('inital', initialData)

  const categoryes = [
    { id: "Camiseta", title: "Camiseta" },
    { id: "Sapato", title: "Sapato" },
    { id: "Blusa", title: "Blusa" },
  ];

  function handleSubmit(data, { resetForm }) {
    if(edit) {
      editProduct(productSelected.index, data);
    }else {
      addProduct(data);
    }

    resetForm();
  }

  return (
    <Container>
      <Title>{edit ? 'Editar' : 'Cadastrar'} Produto</Title>
      <Form
        initialData={initialData}
        schema={schema}
        onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Select name="category" options={categoryes} />
          <Input name="amount" type="number" placeholder="Quantidade" />
          <Input name="price" type="number" placeholder="Preço" />
          <Input name="url_image" placeholder="Url imagem" />
          <Input name="description" placeholder="Descrição" />

          <button type="submit">{edit ? 'Salvar' : 'Cadastrar'}</button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Add);
