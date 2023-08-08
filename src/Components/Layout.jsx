import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation();
 
    return (

        <div className='md:flex md:min-h-screen'>
            <aside className="md:w-1/4 bg-red-950 px-5 py-10">
                <h1 className='text-center text-white'>Tramites</h1>
                <nav className="mt-10">

                    <Link className={`${location.pathname == '/' ? 'bg-pink-900 rounded-sm' : ''} flex pl-2 items-center text-xs font-semibold h-6 block mt-2 text-white`}
                        to={'/'}>Inicio</Link>

                    <Link className={`${location.pathname == '/filavirtual/registro' ? 'bg-pink-900 rounded-sm' : ''} flex pl-2 items-center text-xs font-semibold h-6 block mt-2 text-white`}
                        to={'/filavirtual/registro'}>Nuevo Registro</Link>
                </nav>

            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>

    )
}

export default Layout
