import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas sobre el hook useForm', () => {
    const initialForm = {
        name: 'Luis',
        email: 'luis@gmail.com'
    }

    test('Debe regresar un formulario por defecto', () => {
       const { result } = renderHook(() => useForm(initialForm));
       const [values, handleInputChange, reset] = result.current;

       expect(values).toEqual(initialForm);
       expect(typeof handleInputChange).toBe('function');
       expect(typeof reset).toBe('function');
    });

    test('Debe cambiar el valor del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;
        act(() => handleInputChange({
            target: {
                name: 'name',
                value: 'Fernando'
            }
        }));

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Fernando'});
    });
   
    test('Debe reestablecer los valores en vacío', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Fernando'
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
});