import {Instrument, OrderStatus} from "../Enums";
import { IMarketMessage } from "../store/reducers/errorTerminalReducer";
import {Envelope, Message } from "./Base";

export interface ServerEnvelope extends Envelope {
    messageType: ServerMessage
}

export interface ServerMessage extends Message {

}

export interface ErrorInfo extends ServerMessage {
    reason: string
}

export interface SuccessInfo extends ServerMessage {

}

export interface ExecutionReport extends ServerMessage {
    orderId: string
    orderStatus: OrderStatus
}

export interface MarketUpdate extends ServerMessage {
    messageType: ServerMessage,
    message: MarketMessage
}

export interface MarketMessage {
    subscriptionId: string
    instrument: Instrument
    quotes: IMarketMessage[]

}
