import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { treeReducer } from './treeReducer';

const rootReducer = combineReducers({
    tree: treeReducer
})


export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;
