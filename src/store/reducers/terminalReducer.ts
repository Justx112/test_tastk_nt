import { useDispatch } from "react-redux"
import { Instrument, OrderSide, ClientMessageType } from "../../Enums"

export interface IBodyMessage{
    typeInstrument: string,
    orderSide: OrderSide,
    amount: number,
}

export interface IUserAction{
    type: string,
    payload?: any
}

const defaultState: IBodyMessage ={
    typeInstrument: "USD/RUB",
    orderSide: OrderSide.sell,
    amount: 0
}

const setType = "SET_TYPE"
const setOrderSide = "SET_ORED_SIDE"
const setAmount = "SET_AMOUNT"
const resetForm = "RESET_FORM"

export const terminalReducer = (state = defaultState, action: IUserAction):IBodyMessage=>{
    switch(action.type){
        case setType:
            return { ...state, typeInstrument: action.payload }
        case setOrderSide:
            let newState = { ...state, orderSide: action.payload }
            SendMessage(newState)
            return {...state, orderSide:action.payload}
        case setAmount:
            return {...state, amount:action.payload}
        case resetForm:
            return defaultState
        default:
            return state
    }
}


function SendMessage(data:IBodyMessage){
}

export const setTypeAction = (payload: string) => ({ type: setType, payload: payload })
export const setOrderSideAction = (payload: OrderSide) => ({type: setOrderSide, payload})
export const setAmountAction = (payload: number) => ({type: setAmount, payload: payload})
export const resetFormAction = () => ({type:resetForm})