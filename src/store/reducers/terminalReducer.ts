import {  OrderSide } from "../../Enums"
import { Decimal } from 'decimal.js';

export interface IBodyMessage{
    typeInstrument: string,
    price: Decimal,
    amount: Decimal,
    orders: SelfOrder[],
}

export interface SelfOrder{
    id: number,
    typeInstrument: string,
    price: Decimal,
    amount: Decimal,
    orderSide: OrderSide,
}

export interface IUserAction{
    type: string,
    payload?: any
}

const defaultState: IBodyMessage ={
    typeInstrument: "USD/RUB",
    price: new Decimal(0),
    amount: new Decimal(0),
    orders: []
}

const setType = "SET_TYPE"
const setAmount = "SET_AMOUNT"
const setPrice = "SET_PRICE"
const addSelfOrder = "AAD_SELF_ORDER"


export const terminalReducer = (state = defaultState, action: IUserAction):IBodyMessage=>{
    switch(action.type){
        case setType:
            return { ...state, typeInstrument: action.payload }
        case setAmount:
            return {...state, amount:action.payload}
        case setPrice:
            return {...state, price:action.payload}
        case addSelfOrder:
            return { ...state, orders: [...state.orders, action.payload]}
        default:
            return state
    }
}


export const setTypeAction = (payload: string) => ({ type: setType, payload: payload })
export const setAmountAction = (payload: number) => ({ type: setAmount, payload: new Decimal(payload)})
export const setPriceAction = (payload: number) => ({ type: setPrice, payload: new Decimal(payload)})
export const addSelfOrderAction = (payload: SelfOrder) => ({ type: addSelfOrder, payload: payload })