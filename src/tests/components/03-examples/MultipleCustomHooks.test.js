import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");

describe('Pruebas sobre multiple custom hooks', () => {
    test('Debe mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });
   
    test('Debe mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Luis',
                quote: 'Holas'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Holas');
        expect(wrapper.find('footer').text().trim()).toBe('Luis');
    });
    
});
