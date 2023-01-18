import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAmountAction } from "../../../store/reducers/terminalReducer";


export function AmountInput() {

    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    return (
        <input type="number" className={error ? "input_error" : "input"} onChange={e => {
        }}
            onFocus={e => setError(false)}
            onBlur={e => {
                if (Number(e.target.value) === 0) {
                    setError(true);
                }
                else {
                    dispatch(setAmountAction(e.target.valueAsNumber));
                }
            }
            }
        />
    );
}