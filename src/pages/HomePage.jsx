import imagen1 from '../img/imagen1.jpg'
import imagen2 from '../img/imagen2.jpg'
import imagen3 from '../img/imagen3.jpg'


function HomePage() {
    return (
        <div className="container bg-primary p-10 w-full rounded-lg">
                <div className='flex flex-col justify-center items-center bg-cover bg-center h-full p-7 rounded-md' style={{backgroundImage: `url(${imagen3})`}}>
                    <h1 className='text-8xl font-bold my-4 text-white'>Care Money</h1>
                    <span className='text-lg text-white'>Ayudandote a cuidar tu dinero</span>
                </div>
                
            
            
            <div className="grid grid-cols-2 gap-10 my-20">
                <div className='container bg-secondary p-4 rounded-md'>
                    <img src={imagen1} alt="dinero" />
                    <h2 className='text-2xl font-bold my-2 text-black'>¿Que hace nuestra aplicacion?</h2>
                    <p className='text-lg text-black leading-relaxed text-justify'>En esta aplicacion lograras manejar tus finanzas personales, esto te ayudara a ser un poco mas responsable y darte cuenta de cuanto es lo que estas gastando y tener un control de ello</p>
                </div>
                
                <div className='container bg-secondary p-6 rounded-md'>
                <img src={imagen2} alt="dinero2" />
                    <h2 className='text-2xl font-bold my-2 text-black'>¿En que esta desarrollado esta aplicacion?</h2>
                    <p className='text-lg text-black leading-relaxed text-justify'>Esta aplicacion esta desarrollada con el stack PERN, que es Postgresql, Express Js, React y Node Js. Tambien se usaron algunas otras librerias, como Talwind CSS para estilizar</p>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage