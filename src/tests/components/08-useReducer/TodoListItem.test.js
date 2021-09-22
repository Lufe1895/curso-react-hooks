import { shallow } from "enzyme";
import { Simulate } from "react-dom/test-utils";
import { TodoListItem } from "../../../components/08-useReducer/components/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
        />
    );
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe ejecutar el borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('Debe ejecutar el toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('Debe mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${ demoTodos[0].desc }`);
    });

    test('Debe tener la clase complete', () => {
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem 
                    todo={ todo }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
    
});
