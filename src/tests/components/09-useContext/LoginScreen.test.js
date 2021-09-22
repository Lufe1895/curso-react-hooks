import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <LoginScreen />', () => {
    const setUser = jest.fn();
    
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe ejecutar el setUser correctamente', () => {
        wrapper.find('button').prop('onClick')();
            
        expect(setUser).toHaveBeenLastCalledWith({
            id: 123,
            name: 'Luis'
        });
        
    })
    
})
