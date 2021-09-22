import { mount } from "enzyme"
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <AppRouter />', () => {
    const user = {
        id: 1,
        name: 'Luis'
    }
    
    const wrapper = mount(
        <UserContext.Provider value={ user }>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
