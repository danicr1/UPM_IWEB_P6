import { combineReducers } from "redux";
import scoreReducer from './scoreReducer';
import finishedReducer from './finishedReducer';
import currentQuesionReducer from './currentQuestionReducer';
import questionsReducer from './questionsReducer';

const GlobalState = combineReducers({
    score: scoreReducer,
    finished:finishedReducer,
    currentQuestion:currentQuesionReducer,
    questions: questionsReducer
});

export default GlobalState;
