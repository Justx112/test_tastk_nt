import { errorTerminalReducer } from "./reducers/errorTerminalReducer"
import { terminalReducer } from "./reducers/terminalReducer"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"


import thunk from "redux-thunk"

const reducers = combineReducers({
    terminal: terminalReducer,
    errors: errorTerminalReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch
type typedDispatchFunct = () => dispatchType

export const typedUseSelector:TypedUseSelectorHook<stateType> = useSelector
export const typedDispatch: typedDispatchFunct = useDispatch