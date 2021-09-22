import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });
    
    test('Debe tener el counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        
        expect(result.current.counter).toBe(100);
    });

    test('Debe incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act(() => increment());

        const { counter } = result.current;
        expect(counter).toBe(11);
    });
    
    test('Debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => decrement());

        const { counter } = result.current;
        expect(counter).toBe(9);
    });

    test('Debe resetear el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;

        act(() => decrement());
        act(() => decrement());
        act(() => decrement());
        act(() => reset());

        const { counter } = result.current;
        expect(counter).toBe(10);
    });
});
