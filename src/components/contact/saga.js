import { put, takeLatest, all, call } from 'redux-saga/effects'
import { 
  FORM_UPDATE,
  GET_PRODUCTS
} from './constants';




function* getProducts(state) {

  var data= {products: [{name:'first product', price:'20$'}, 
  {name:'second product', price:'20$'}, 
  {name:'third product', price:'20$'}]}

  yield put({type:GET_PRODUCTS, payload:data})

}

function* newProduct() {

}



export default function* () {
  yield all([
    takeLatest(FORM_UPDATE,getProducts),
  ])
}

