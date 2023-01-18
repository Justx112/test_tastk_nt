export interface IError {
    errorInstrument: boolean,
    errorAmount: boolean,
}

const defaultState:IError={
    errorInstrument:false,
    errorAmount:false,
}

const setInstrumentError = "SET_TYPE_ERROR"
const resetInstrument = "RESET_TYPE_ERROR"
const setAmountError = "SET_AMOUNT_ERROR"
const resetAmountError = "RESET_AMOUNT_ERROR"

export const errorTerminalReducer = (state = defaultState, action: any): IError => {
    switch (action.type) {
        case setInstrumentError:
            return { ...state, errorInstrument: action.payload }
        case setAmountError:
            return {...state, errorAmount: action.payload}

        default:
            return state
    }
}

export const setInstrumentErrorAction = (payload: boolean) => ({ type: setInstrumentError, payload: payload })
export const setAmountErrorAction = (payload: boolean) => ({ type: setAmountError, payload: payload })