import { InstrumentInput } from "./componentsTerminal/InstrumentInput"
import { AmountInput } from "./componentsTerminal/AmountInput"
import { Buttons } from "./componentsTerminal/Buttons"
import "./styleTerminal.css"

export function Terminal() {

    return (
        <div className="terminal">
            <InstrumentInput></InstrumentInput>
            <AmountInput />
            <Buttons/>
        </div>
    )
}