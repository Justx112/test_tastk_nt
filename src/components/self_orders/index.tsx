import { OrderSide } from "../../Enums";
import { typedUseSelector } from "../../store";
import { SelfOrder } from "../../store/reducers/terminalReducer"
import "./styleOrders.css"

export function SelfOrdersElemets() {

    let selfOrderArray = typedUseSelector(state => state.terminal.orders)

    let visibility = selfOrderArray.length > 0

    let orderArray = selfOrderArray.map((item: SelfOrder) => <div key={Math.random()} className="type_order">{item.orderSide === OrderSide.buy ? "Buy" : "Sell"}</div>)
    let amountArray = selfOrderArray.map((item: SelfOrder) => <div key={Math.random()} className="amount_order">{item.amount.toNumber()}</div>)
    let priceArray = selfOrderArray.map((item: SelfOrder) => <div key={Math.random()} className="price_order">{item.price.toNumber()}</div>)
    let instrumentArray = selfOrderArray.map((item: SelfOrder) => <div key={Math.random()} className="instrument_order">{item.typeInstrument}</div>)


    return (
        <>
            {visibility && <div key={Math.random()} className="header">
                <div className="type_order container">
                    <div className="type_order_header">Buy/Sell</div>
                    {orderArray}
                </div>
                <div className="price_order container">
                    <div className="price_order_header">Price</div>
                    {amountArray}
                    </div>
                <div className="price_amount container">
                    <div className="price_amount_header">Amount</div>
                    {priceArray}
                    </div>
                <div className="instrument_order container">
                    <div className="instrument_order_header">Instrument</div>
                    {instrumentArray}
                    </div>
            </div>}
        </>
    )
}