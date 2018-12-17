export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

// Guarda la respuesta introducida por el usuario
export function questionAnswer(index, answer) {
    return {type: QUESTION_ANSWER, payload: {index, answer}};
}

// Cambia la pregunta que se muestra
export function changeQuestion(index) {
    return {type: CHANGE_QUESTION, payload: {index}};
}

// Finaliza el juego, comprueba las respuestas y muestra la puntuación
export function submit(questions) {
    return {type: SUBMIT, payload: {questions}};
}

// Sobreescribe las preguntas del estado con las que hay en questions
// Se usa cuando pedimos las preguntas al servidor
export function initQuestions(questions) {
    return {type: INIT_QUESTIONS, payload: {questions}};
}