import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { typedUseSelector } from "../../../store";
import { setInstrumentErrorAction } from "../../../store/reducers/errorTerminalReducer";
import { setTypeAction } from "../../../store/reducers/terminalReducer";

export function InstrumentInput() {
    
    const dispatch = useDispatch()

    const [visibility, setVisibility] = useState(false)
    const [error, setError] = useState(false)
    const [value, setValue] = useState('USD/RUB')

    const refLink = useRef<HTMLInputElement>(null)
    
    const terminalArray: string[] = ["EUR/RUB", "EUR/USD", "USD/RUB"]

    function onBlur(e:MouseEvent){
        if (e.target !== refLink.current){
            setError(!terminalArray.some(item => item === refLink.current?.value.toUpperCase()))
            setVisibility(false)
        } 
    }

    useEffect(()=>{
        document.addEventListener("click", onBlur)
        return () => document.removeEventListener("click", onBlur)
    },[])
    

    return (
        <>
            <input ref={refLink} className={error ? "input_error" : "input"}
                onChange={e => {
                    setValue(e.target.value.toUpperCase());
                    setVisibility(!terminalArray.some(item => item === e.target.value.toUpperCase()))
                    dispatch(setTypeAction(value))
                }}
                onFocus={e=>{
                    setError(false)
                    setVisibility(true)
                }}
                value={value} type="text" />

            {visibility && <div className="terminal__options"
                onClick={e=>{
                    setVisibility(false)
                    setError(false)
                }}>
                {terminalArray.map((item: string) => {
                    if (item.includes(value))
                        return <div className="terminal__choise"
                            key={Math.random()}
                            onClick={() => {
                                setValue(item);
                                dispatch(setTypeAction(item))
                            }}
                        >
                            {item}
                        </div>
                })}
            </div>}
        </>
    );
}