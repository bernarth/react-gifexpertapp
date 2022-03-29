import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    const wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    // test('debe de cambiar la caja de texto', () => {
    //     const input = wrapper.find('input');
    //     const value = 'Hola Mundo';

    //     input.simulate('change', { target: { value } });

    //     expect( wrapper.find('p').text().trim() ).toBe(value);

    // });

    test('No de debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. El valor del input debe de estar ''
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});