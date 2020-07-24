import { FORM_UPDATE}  from './constants'

export const disptachContactData = (cobtactDataObj) => ({ 
    payload: cobtactDataObj, 
    type: FORM_UPDATE 
})
