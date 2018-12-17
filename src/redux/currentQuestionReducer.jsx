import { CHANGE_QUESTION } from "./actions";

function currentQuestionReducer(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return action.payload.index + 1;
        default:
            return state;
    }
}

export default currentQuestionReducer;