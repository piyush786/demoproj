import { 
  FORM_UPDATE,
  GET_PRODUCTS
} from './constants';




export default function storeCases(state={}, action) {
  console.log(action,'+++')
  switch (action.type) {
    case GET_PRODUCTS :
      return { ...state, "productData" : action.payload}
    default : 
      return { ...state }
  }
}