import { useState } from "react"
import { Instrument } from "../../Enums"
import { sender } from "../../WSClient"

export function Market() {

    const [instrument, setInstrument] = useState(Instrument.usd_rub)

    sender.subscribeMarketData(instrument)

    return (
        <div className="market">
            <div className="id_header"></div>
            <div className="time_header"></div>
            <div className="status_header"></div>
            <div className="side_header"></div>
            <div className="price_header"></div>
            <div className="amount_header"></div>
            <div className="instrument_header"></div>
        </div>
    )
}