import {useForm} from 'react-hook-form';
import { useCuenta } from '../context/CuentaContext';
import {useNavigate} from 'react-router-dom'
import Sidebar from '../components/Sidebar';

function CuentaForm() {
    const {register, handleSubmit} = useForm();
    const {createCuenta} = useCuenta();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createCuenta(data);
        navigate('/profile/getcuenta')

    })

    return (
        <div className="container w-full flex gap-x-6">
            <Sidebar/>
            <div>
                <div className=' h-[calc(100vh-100px)] items-center justify-center'>
                    
                    <div className='bg-primary max-w-md w-full p-10 rounded-md'>
                        <h1 className='text-5xl font-bold my-4 text-white'>Cuenta</h1>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder="Tipo de Cuenta" {...register("tipoCuenta")} className='w-full bg-secondary color-black px-4 py-2 rounded-md my-2' autoFocus/>
                            <input type="text" placeholder="Saldo" {...register("saldoInicial")} className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'/>

                            <button type='sumbit' className='text-lg bg-cafe hover:bg-secondary hover:text-black  p-2 text-white font-bold py-2 px-4 my-2 rounded'>Crear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default CuentaForm;