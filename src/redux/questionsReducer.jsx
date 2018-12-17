import { QUESTION_ANSWER } from "./actions";

function questionsReducer(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                }
            });
        default:
            return state;
    }
}

export default questionsReducer;