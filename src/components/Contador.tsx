import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [tiempo, setTiempo] = useState(new Date(0, 0, 0, 0, 0, 5));

    let interval: any;

    const actualizarContador = () => {
    
        setTiempo(prevTiempo => {
           
            const nuevoTiempo = new Date(prevTiempo.getTime() - 1000);

            if (nuevoTiempo.getMinutes() == 0 && nuevoTiempo.getSeconds() == 0) {
                clearInterval(interval);
            }

            return nuevoTiempo;
        });
    };

    useEffect(() => {
        interval = setInterval(actualizarContador, 1000);
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    // Renderizar el contador en formato MM:SS
    return (
        <div className="text-black flex flex-col items-center">
            <p className='text-xl'>Empezamos en:</p>
            <p className='text-3xl'>{tiempo.getMinutes().toString().padStart(2, '0')}:{tiempo.getSeconds().toString().padStart(2, '0')}</p>
        </div>
    );
};

export default Contador;