import { useForm } from 'react-hook-form';
import { useTransaccion } from '../context/TransaccionContex';
import { useNavigate } from 'react-router-dom';
import { useCuenta } from '../context/CuentaContext';
import Sidebar from '../components/Sidebar';

function TransaccionForm() {
    const { register, handleSubmit } = useForm();
    const { createTransaccion } = useTransaccion();
    const { cuenta } = useCuenta();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const { tipoTransaccion, cantidad, idcuenta } = data;

        if (!idcuenta) {
            alert('Por favor selecciona una cuenta');
            return;
        }

        await createTransaccion({ idcuenta: idcuenta, tipoTransaccion: tipoTransaccion, cantidad: cantidad });

        navigate('/profile/gettransaccion');
    };

    return (
        <div className="container w-full flex gap-x-6">
            <Sidebar/>
            <div className='h-[calc(100vh-100px)] items-center justify-center'>
                <div className='bg-primary max-w-md w-full p-10 rounded-md'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <select {...register("idcuenta")} className='w-full bg-secondary color-black px-4 py-2 rounded-md my-2' defaultValue="">
                            <option value="" disabled>Selecciona una cuenta</option>
                            {cuenta.map(cuenta => (
                                <option key={cuenta.id} value={cuenta.idcuenta}>{cuenta.tipocuenta}</option>
                            ))}
                        </select>
                        <input type="text" placeholder="Concepto" {...register("tipoTransaccion")} className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2' autoFocus />
                        <input type="text" placeholder="Cantidad" {...register("cantidad")} className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2' />

                        <button type='submit' className='text-lg bg-cafe hover:bg-secondary hover:text-black  p-2 text-white font-bold py-2 px-4 my-2 rounded'>Crear</button>
                    </form>
                </div>
            </div>
        </div>
        
        
    );
}

export default TransaccionForm;
