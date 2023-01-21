import { Instrument, OrderStatus } from "../../Enums"
import { MarketMessage } from "../../Models/ServerMessages"

export interface IMarketMessage {
    id: number,
    date: number,
    status: OrderStatus,
    amount: number,
    price: number,
}

const defaultState:MarketMessage =  {
    subscriptionId: "",
    instrument: Instrument.eur_rub,
    quotes: []
}

const getMarket = "GET_MARKET"

export const errorTerminalReducer = (state = defaultState, action: any): MarketMessage => {
    switch (action.type) {
        case getMarket:
            return action.payload
        default:
            return state
    }
}

export const getMarketAction = (instrument: MarketMessage) => ({ type: getMarket, payload: instrument })