import {ClientMessage} from "./Models/ClientMessages";
import {ClientMessageType, Instrument, OrderSide, ServerMessageType} from "./Enums";
import Decimal from "decimal.js";
import {MarketUpdate} from "./Models/ServerMessages";
import { store } from "./store";
import { getMarketAction } from "./store/reducers/errorTerminalReducer";

export class WSConnector {
  connection: WebSocket | undefined;

  constructor() {
    this.connection = undefined;
  }

  connect = () => {
    this.connection = new WebSocket('ws://localhost:5000');
    this.connection.onclose = () => {
      this.connection = undefined;
    };

    this.connection.onerror = () => {

    };

    this.connection.onopen = () => {

    };

    this.connection.onmessage = (event) => {
      const message: MarketUpdate = JSON.parse(event.data);
      switch (message.messageType) {
        case ServerMessageType.success:

          break;
        case ServerMessageType.error:

          break;
        case ServerMessageType.executionReport:

          break;
        case ServerMessageType.marketDataUpdate:
          store.dispatch(getMarketAction(message.message));
          break;
      }
    };
  }

  disconnect = () => {
    this.connection?.close();
  }

  send = (message: ClientMessage) => {
    this.connection?.send(JSON.stringify(message));
  }

  subscribeMarketData = (instrument: Instrument) => {
    this.send({
      messageType: ClientMessageType.subscribeMarketData,
      message: {
        instrument,
      }
    });
  }

  unsubscribeMarketData = (subscriptionId: string) => {
    this.send({
      messageType: ClientMessageType.unsubscribeMarketData,
      message: {
        subscriptionId,
      }
    });
  }

  placeOrder = (instrument: Instrument, side: OrderSide, amount: Decimal, price: Decimal) => {
    this.send({
      messageType: ClientMessageType.placeOrder,
      message: {
        instrument,
        side,
        amount,
        price,
      }
    });
  }
}

export const sender = new WSConnector();
