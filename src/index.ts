import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

(async () => {
  const palabra: string = await preguntar('Ingresa una palabra: ');

  const claveTexto: string = await preguntar('Ingresa la clave: ');
  const clave: number = parseInt(claveTexto, 10);

  const accion: string = await preguntar('¿Que querés hacer? (cifrar/descifrar): ');

  let resultado: string = '';
  if (accion === 'cifrar') {
    resultado = cifrar(palabra, clave);
  } else if (accion === 'descifrar') {
    resultado = descifrar(palabra, clave);
  } else {
    console.log('Accion no valida. Por favor, elegi "cifrar" o "descifrar".');
    process.exit(1);
  }

  console.log(resultado);
})();