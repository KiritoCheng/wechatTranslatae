import { TRANSLATE } from '../actions/translate';

export const translate = (state = {}, action) => {
    switch (action.type) {
        case TRANSLATE:
            return action.data;
        default:
            return state
    }
}