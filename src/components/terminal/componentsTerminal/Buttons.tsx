import { Instrument, OrderSide } from "../../../Enums";
import { setOrderSideAction, setTypeAction } from "../../../store/reducers/terminalReducer";
import { useDispatch } from "react-redux";
import { setAmountErrorAction, setInstrumentErrorAction } from "../../../store/reducers/errorTerminalReducer";
import { dispatchType, stateType,  } from "../../../store";
import { ThunkAction } from "redux-thunk/es/types";
import { AnyAction } from "redux";
import { sender } from "../../../WSClient";

export function Buttons() {

    const dispatch = useDispatch<dispatchType>()

    function ValidateAndSend(instrumentType: OrderSide): ThunkAction<void, stateType, unknown, AnyAction>{
        return (dispatch, getState)=>{
            const newState: stateType = getState();
            const {terminal} = newState
            let {amount, typeInstrument: type} = terminal
            switch(type){
                case "EUR/RUB":
                    dispatch(setTypeAction("aa"));
                    break;
                case "EUR/USD":
                    dispatch(setTypeAction("bb"));
                    break;
                case "USD/RUB":
                    dispatch(setTypeAction("cc"));
                    break;
                default:
                    dispatch(setInstrumentErrorAction(true))
                    break;
            }
            console.log(getState())
        }
    }

    return (<div className="terminal__buttons_container">
        <button className="terminal_button_buy" type="submit" onClick={() => {
            dispatch(ValidateAndSend(OrderSide.buy));
            ;
        }}>
            buy</button>
        <button className="terminal_button_sell" type="submit" onClick={e => {
            dispatch(ValidateAndSend(OrderSide.sell));
        }}>sell</button>
    </div>);
}