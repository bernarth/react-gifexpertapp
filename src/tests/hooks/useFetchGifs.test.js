import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        // console.log(resp);
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        // When you do another change then it is impossible to test because 
        // the hook is not re-rendering and it is unmounted
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    });
});
