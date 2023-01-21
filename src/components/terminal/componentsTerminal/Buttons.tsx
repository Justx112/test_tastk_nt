import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Instrument, OrderSide } from "../../../Enums";
import { dispatchType, stateType, typedUseSelector } from "../../../store";
import { addSelfOrderAction } from "../../../store/reducers/terminalReducer";
import { sender } from "../../../WSClient";

export function Buttons() {

    const dispatch = useDispatch<dispatchType>()
    const [id, setID] = useState(1);

    let { typeInstrument, amount, price } = typedUseSelector(state => state.terminal)

    function sendMessage(orderSide: OrderSide): ThunkAction<void, stateType, unknown, AnyAction> {
        return async (dispatch) => {
            try{
                if (amount.gt(0) && price.gt(0)) {
                    switch (typeInstrument) {
                        case "EUR/RUB":
                            await sender.placeOrder(Instrument.eur_rub, orderSide, price, amount)
                            break;
                        case "EUR/USD":
                            await sender.placeOrder(Instrument.eur_rub, orderSide, price, amount)
                            break;
                        case "USD/RUB":
                            await sender.placeOrder(Instrument.eur_rub, orderSide, price, amount)
                            break;
                    }
                    dispatch(addSelfOrderAction({
                        id: id,
                        typeInstrument: typeInstrument,
                        price: price,
                        amount: amount,
                        orderSide: orderSide
                    }))
                    setID(prev=> prev + 1)
                }
            }
            catch(err){}
        }
    }

    return (<div className="terminal__buttons_container">
        <button className="terminal_button_buy" type="submit" onClick={() => {
            dispatch(sendMessage(OrderSide.buy));
        }}>
            buy
        </button>
        <button className="terminal_button_sell" type="submit" onClick={e => {
            dispatch(sendMessage(OrderSide.sell));
        }}>
            sell
        </button>
    </div>);
}