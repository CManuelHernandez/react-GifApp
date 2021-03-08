import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fetch', () => {

    test('debe de traer 15 elementos', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 15 );
    });

    test('Si no hay busqueda', async() => {

        const gifs = await getGifs('');

        expect(gifs.length ).toBe( 0 );
    });

})