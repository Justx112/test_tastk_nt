import { InstrumentInput } from "./componentsTerminal/InstrumentInput"
import { SetInputNumber } from "./componentsTerminal/SetInputNumber"
import { Buttons } from "./componentsTerminal/Buttons"
import "./styleTerminal.css"
import { setAmountAction, setPriceAction } from "../../store/reducers/terminalReducer"

export function Terminal() {

    return (
        <div className="terminal">
            <InstrumentInput/>
            <SetInputNumber inputType={setAmountAction} />
            <SetInputNumber inputType={setPriceAction}/>
            <Buttons/>
            
        </div>
    )
}