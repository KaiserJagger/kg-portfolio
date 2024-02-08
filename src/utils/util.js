import { saveAs } from 'file-saver';

export const descargarPDF = (rutaArchivo, nombreArchivo) => {
  fetch(rutaArchivo)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo descargar el archivo');
      }
      return response.blob();
    })
    .then(blob => {
      saveAs(blob, nombreArchivo);
    })
    .catch(error => {
      console.error('Error al descargar el archivo:', error);
    });
};
