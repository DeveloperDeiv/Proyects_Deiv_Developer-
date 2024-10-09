import React from "react";

function BarraContacto() {
    return (
        // Contenedor principal de la barra de contacto con fondo verde, ancho completo y padding interno
        <div id="#BarraDeContacto" className="bg-green-800 w-full text-black p-12 font-mono">

            {/* Sección de contenido centrada horizontalmente */}
            <section className="text-center">

                {/* Lista en Flexbox, alineada a la izquierda (justify-start) con los elementos centrados verticalmente */}
                <ul className="flex justify-center items-center w-full">
                    
                    {/* Primer elemento de la lista: Contiene el número de contacto */}
                    <li className="flex flex-col items-center">

                        {/* Título del número de contacto, con estilo negrita */}
                        <h3><strong>Número de contacto:</strong></h3>
                        
                        {/* Enlace que permite realizar una llamada al número de contacto */}
                        <a href="https://wa.me/qr/JKRYSV77P4EPM1" className="hover:text-blue-900">+57 323 656 0330</a>
                    </li>

                    {/* Segundo elemento de la lista: Contiene el correo electrónico */}
                    <li className="flex flex-col items-center ml-60">

                        {/* Título del correo electrónico, con estilo negrita */}
                        <h3><strong>Email:</strong></h3>
                        {/* Enlace que permite enviar un correo electrónico */}
                        <a href="mailto:brandon_david.gonzalez@outlook.com" className="hover:text-blue-900">
                            brandon_david.gonzalez@outlook.com</a>
                    </li>
                </ul>
            </section>
        </div> 
    );
}

export default BarraContacto;

/*
Explicación de las clases de Tailwind usadas:

1. `bg-green-800`: Define el color de fondo verde oscuro (escala 800).
2. `w-full`: Establece que el ancho del contenedor ocupará el 100% del ancho disponible.
3. `text-black`: Cambia el color del texto a negro.
4. `p-12`: Agrega un padding (relleno interno) de 3rem (48px) a todo el contenedor.
5. `text-center`: Centra horizontalmente el contenido de texto dentro de su contenedor.
6. `flex`: Aplica Flexbox para que los elementos dentro del ul se distribuyan en una fila.
7. `justify-start`: Alinea los elementos flexibles al principio del contenedor, es decir, a la izquierda.
8. `items-center`: Centra los elementos flexibles verticalmente dentro del contenedor.
9. `w-full`: Asigna el ancho total del contenedor padre.
10. `flex-col`: Alinea los elementos dentro de cada `li` en una columna, uno debajo del otro (por ejemplo, el título y el enlace).
11. `a`: Enlaces para realizar una llamada (tel:) o enviar un correo electrónico (mailto:).

Centro: justify-center → Los elementos se colocan en el centro.
Izquierda: justify-start → Los elementos se colocan a la izquierda.
Derecha: justify-end → Los elementos se colocan a la derecha.

*/
