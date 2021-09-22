import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn();

    test('Se muestra correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe agregar un TODO', () => {

        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        });
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');

        expect(localStorage.setItem).toHaveBeenLastCalledWith(2)
    });
    
    test('Debe eliminar un Todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');
    })
    
});
