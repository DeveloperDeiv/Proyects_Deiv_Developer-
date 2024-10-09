import React from 'react';

function Navbar() {
  return (
    // Contenedor principal de la cabecera que ocupa el ancho completo
    <header className='w-full font-mono'>
      
      {/* Navegación con fondo verde oscuro y padding interno */}
      <nav className='bg-green-800 p-4 w-full'>
        
        {/* Lista de navegación en Flexbox, con elementos distribuidos uniformemente a lo largo del ancho */}
        <ul className='flex justify-end w-full'>
          
          {/* Primer ítem de la lista: Enlace para descargar el CV */}
          <li>
            
            {/* Enlace con color de texto negro que cambia a azul oscuro al pasar el mouse */}
            <a href="" className='text-black hover:text-blue-700 ml-20'>Descargar CV</a>
          </li>
          
          {/* Segundo ítem de la lista: Enlace para la sección de contacto */}
          <li>
            <a href="BarraDeContacto" className='text-black hover:text-blue-700 ml-20'>Contacto</a>
          </li>
          {/* Tercer ítem de la lista: Enlace a GitHub */}
          <li>
            <a href="https://github.com/DeveloperDeiv" className='text-black hover:text-blue-700 ml-20'>Github</a>
          </li>
          {/* Cuarto ítem de la lista: Enlace a LinkedIn */}
          <li>
            <a href="https://www.linkedin.com/in/david-gonzalez-659097240/" className='text-black hover:text-blue-700 m-20'>Linkedin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

/*
Explicación de las clases de Tailwind usadas:

1. `w-full`: Hace que el contenedor del header y el nav ocupen todo el ancho disponible.
2. `bg-green-800`: Asigna un color de fondo verde oscuro al navbar.
3. `p-4`: Agrega un padding (relleno interno) de 1rem (16px) alrededor del contenido del navbar.
4. `flex`: Aplica Flexbox para distribuir los elementos dentro del `ul`.
5. `justify-around`: Distribuye los elementos del `ul` uniformemente con espacio igual entre ellos.
6. `text-right`: Alinea el texto dentro de los elementos hacia la derecha (aunque no tiene impacto visible aquí ya que los `li` están en flexbox).
7. `item-right`: Parece un error tipográfico, la clase correcta sería `items-right` o `items-center` para alineación vertical. `item-right` no es válida en Tailwind.
8. `text-black`: Define el color del texto como negro por defecto.
9. `hover:text-blue-700`: Cambia el color del texto a azul oscuro cuando el usuario pasa el mouse sobre el enlace.
*/
