export const Types = {
  ADD_PRODUCT: 'products/ADD_PRODUCT',
  MARK_PRODUCT: 'products/MARK_PRODUCT',
  EDIT_PRODUCT: 'products/EDIT_PRODUCT',
  DELETE_PRODUCT: 'products/DELETE_PRODUCT',
};

const INITIAL_STATE = {
  data: [
    {name: 'Camiseta Boteco', description: 'descrição produto', price: 32, amount: 1, category: 'Camiseta', url_image: 'https://img.elo7.com.br/product/zoom/1599B04/camisetas-boteco-para-aniversario3-camisetas-adulto.jpg' },
    {name: 'Moletom HD Autumn Leaves - Masculino - Preto', description: 'descrição produto', price: 20, amount: 2, category: 'Blusa', url_image: 'https://static.netshoes.com.br/produtos/moletom-hd-autumn-leaves-masculino/06/C93-0749-006/C93-0749-006_zoom1.jpg?resize=544:*' },
  ],
  edit: false,
  productSelected: {},
}

export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.ADD_PRODUCT:
      return { data: [...state.data, action.payload.product] };
    case Types.MARK_PRODUCT:
      let product = state.data[action.payload.index];
      product.index = action.payload.index;
      return { ...state, edit: true, productSelected: product, };
    case Types.EDIT_PRODUCT:
      state.data[action.payload.index] = action.payload.data;
      return { ...state, data: [...state.data], edit: false, productSelected: {} };
    case Types.DELETE_PRODUCT:
      const newDataDeleted = state.data.filter((item, index) => index !== action.payload.index);
      return { ...state, data: newDataDeleted };
    default:
      return state;
  }
}

export const Creators = {
  addProduct: product => ({
    type: Types.ADD_PRODUCT,
    payload: {
      product,
    },
  }),
  markedProduct: index => ({
    type: Types.MARK_PRODUCT,
    payload: { index }
  }),
  editProduct: (index, data) => ({
    type: Types.EDIT_PRODUCT,
    payload: { index, data }
  }),
  deleteProduct: index => ({
    type: Types.DELETE_PRODUCT,
    payload: { index }
  })
};
