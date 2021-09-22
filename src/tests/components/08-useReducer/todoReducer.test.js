import { todoReducer } from "../../../components/08-useReducer/TodoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en TodoReducer', () => {
    test('Debe retornar el estado por defecto.', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender VueJS',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });
   
    test('Debe de hacer toggle de un TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });
});
