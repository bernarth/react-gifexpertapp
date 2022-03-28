import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Titulo del Gif';
    const url = 'https://localhost/gif.gif';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe de mostrarse <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {        
        const paragraph = wrapper.find('p').text();

        expect(paragraph.trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        // you can also use find('img').props() to have all properties in an object.
        const img = wrapper.find('img').prop('src');
        const alt = wrapper.find('img').prop('alt');

        expect(img).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className).toContain('animate__fadeIn');
    });
});
