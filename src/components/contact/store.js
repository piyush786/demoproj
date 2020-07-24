import { 
  FORM_UPDATE,
} from './constants';




export default function storeCases(state={}, action) {
  switch (action.type) {
    case FORM_UPDATE :
      return { ...state, "contactData" : action.payload}
    default : 
      return { ...state }
  }
}