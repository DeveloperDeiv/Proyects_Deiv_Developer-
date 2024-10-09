import { useState } from 'react'; 
import './App.css'; 
import PhotoProfile from './PhotoProfile'; 
import Navbar from './NavBar'; 
import BarraContacto from './BarraContacto';

function App() {
  // Estado para manejar la apertura de submenús
    const [menuState, setMenuState] = useState({
      logiGo: false,
      electricosDelta: false,
    });

    const handleMouseEnter = (menu) => {
      setMenuState((prevState) => ({ ...prevState, [menu]: true }));
    };

    const handleMouseLeave = (menu) => {
      setMenuState((prevState) => ({ ...prevState, [menu]: false }));
    };

  return (
    <div className='font-mono bg-black w-full'> 
      <Navbar /> 
      <main className="flex flex-col md:flex-row items-center justify-center text-green-100 p-4 md:p-16 gap-4">

        <section className="bg-green-900 p-10 border-2 border-4 rounded-lg w-full min-w-[250px] 
        max-w-[500px] min-h-[200px] md:min-h-[440px] max-h-[600px]">
          <PhotoProfile /> 
          <div className='ml-4'> 
            <h2>Brandon David Gonzalez</h2> 
            <h3>Fullstack Developer</h3> 
            <p>
              Soy un desarrollador web con 1 año de experiencia desarrollando front-end y back-end.<br />
              Me gusta trabajar con React, Angular, Tailwind, CSS3, Spring-boot, Laravel y MySQL,<br />
              estoy constantemente aprendiendo nuevos frameworks y tecnologías.
            </p>
          </div>  
        </section>

        <div className='space-y-4 w-full md:w-auto'>
          <section className="bg-green-900 p-6 border-2 border-4 rounded-lg">
            <div className='text-gray-900 mb-2'>
              <h3>Mis proyectos:</h3> 
            </div>
            <ul>
              <div className='relative'>
                <div 
                  className='menu-item' 
                  onMouseEnter={() => handleMouseEnter('logiGo')} 
                  onMouseLeave={() => handleMouseLeave('logiGo')}
                >
                  <li className='p-1 mb-2 text-black hover:text-white'><strong>LogiGO</strong></li> 
                  {menuState.logiGo && (
                    <div 
                      className='absolute left-0 top-full mt-2 w-full bg-black shadow-lg z-50 p-6 border-2 border-4 rounded-lg'
                      onMouseEnter={() => handleMouseEnter('logiGo')} 
                      onMouseLeave={() => handleMouseLeave('logiGo')}
                    >
                      <dd className='text-white p-6'>
                        Aplicacion empresarial inspirada en CRM, TMS, WMS, creada para satisfacer las necesidades de las empresas
                        de Logistica, Bodega y Transporte, creada en Angular, Tailwind, Spring-boot y MySQL, protecto empresarial aun
                        en proceso.
                      </dd>
                    </div>
                  )}
                </div>
              </div>

              <div className='relative'>
                <div 
                  className='menu-item' 
                  onMouseEnter={() => handleMouseEnter('electricosDelta')} 
                  onMouseLeave={() => handleMouseLeave('electricosDelta')}
                >
                  <li className='p-1 mb-2 text-black hover:text-white'><strong>Electricos y Ferreteria DELTA S.A.S</strong></li> 
                  {menuState.electricosDelta && (
                    <div 
                      className='absolute left-0 top-full mt-2 w-full bg-black shadow-lg z-50 p-6 border-2 border-4 rounded-lg'
                      onMouseEnter={() => handleMouseEnter('electricosDelta')} 
                      onMouseLeave={() => handleMouseLeave('electricosDelta')}
                    >
                      <dd className='text-white p-6'>
                        Pagina Web creada para satisfacer las necesidades de las empresas en el area de Ventas, 
                        creada en React, Tailwind, PHP/Laravel y MySQL, pagina web Ecommerce en proceso.
                      </dd>
                    </div>
                  )}
                </div>
              </div>
            </ul>
          </section>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <section className="bg-green-900 p-6 border-2 border-4 rounded-lg">
              <div className='text-gray-900 mb-2'>
                <h3>Educación:</h3>
              </div>
              <dl>
                <dt>Bachillerato</dt>
                <dd>2015 - 2019.</dd>
                <dt>Tecnólogo en Desarrollo de Software</dt>
                <dd>Actualmente estudiando.</dd>
              </dl> 
            </section>

            <section className="bg-green-900 p-6 border-2 border-4 rounded-lg">
              <h3>Habilidades extras:</h3>
              <ul>
                <li>Inglés B2+</li>
                <li>Python</li>
                <li>COBOL</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <BarraContacto />
    </div>
  );
}

export default App;
