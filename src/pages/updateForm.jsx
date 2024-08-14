import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function UpdateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { updateUser, isAuthenticated, errors: updateErrors } = useAuth();
    const navigate = useNavigate();
    const params = useParams();
    const [formSubmitted, setFormSubmitted] = useState(false);


    const onSubmit = async (data) => {
        if(params.id){
            updateUser(params.id, data)
        }
        console.log(data)
        setFormSubmitted(true);
    };

    // Redirigir al usuario a la página de perfil si el formulario ya ha sido enviado y el usuario está autenticado
    useEffect(() => {
        if (formSubmitted && isAuthenticated) {
            navigate('/profile');
        }
    }, [formSubmitted, isAuthenticated, navigate]);

    return (
        <div className="container w-full flex gap-x-6">
            <Sidebar/>
            <div>
                <div className=' h-[calc(100vh-100px)] items-center justify-center'>
                    <div className='bg-primary max-w-md w-full p-10 rounded-md'>
                        {updateErrors.map((error, i) => (
                            <div className='bg-red-500 p-2 text-white text-center' key={i}>
                                {error}
                            </div>
                        ))}

                        <h1 className='text-4xl font-bold my-4 text-white'>Actualizar Perfil</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input type="text" placeholder='Nuevo Nombre' {...register("newName", { required: true })} className='w-full bg-secondary color-black px-4 py-2 rounded-md my-2' />
                            {errors.newName && (<p className='text-red-500'>Nombre requerido</p>)}
                            <input type="password" placeholder='Nueva Contraseña' {...register("newPassword", { required: true })} className='w-full bg-secondary color-black px-4 py-2 rounded-md my-2' />
                            {errors.newPassword && (<p className='text-red-500'>Contraseña requerida</p>)}
                            <button type='submit' className='text-lg bg-cafe hover:bg-secondary hover:text-black  p-2 text-white font-bold py-2 px-4 my-2 rounded'>Actualizar</button>
                        </form>

                    </div>
                </div>
                    
            </div>
        </div>
        
    )
}

export default UpdateForm;

