import Decimal from "decimal.js";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function SetInputNumber({ inputType }: { inputType: (value: number) => { type: string; payload: Decimal } }) {

    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    return (
        <input type="number" className={error ? "input_error" : "input"} onChange={e => {
            dispatch(inputType(e.target.valueAsNumber));
        }}
            onFocus={e => setError(false)}
            onBlur={e => {
                if (Number(e.target.value) <= 0) setError(true);
            }
            }
        />
    );
}