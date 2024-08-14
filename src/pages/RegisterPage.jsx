import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function  RegisterPage() {

    const {register, handleSubmit, formState: { errors}} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(() =>{
        if(isAuthenticated) navigate('/profile');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) =>{
        signup(values);
        console.log(values)
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-primary  max-w-md w-full p-10 rounded-md'>
                {registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-center' key={i}>
                        {error}
                    </div>
                ))}

                <h1 className='text-5xl font-bold my-4'>Registrarte</h1>

                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Nombre' {...register("nombre", {required: true})} 
                        className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'
                    />
                    {errors.nombre && (<p className='text-red-500'>Nombre requerido</p>)}
                    <input type="email" placeholder='Email' {...register("email", {required: true})}
                        className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'
                    />
                    {errors.email && (<p className='text-red-500'>email requerido</p>)}
                    <input type="password" placeholder='Contraseña' {...register("contrasena", {required: true})}
                        className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'
                    />
                    {errors.contrasena && (<p className='text-red-500'>contraseña requerida</p>)}
                    <button type='sumbit' className='text-lg bg-primary hover:bg-secondary hover:text-black  p-2 text-white font-bold py-2 px-4 my-2 rounded'>Register</button>
                </form>

                <p className='flex gap-x-2 justify-between items-center text-lg font-semibold'>¿Ya tienes una cuenta? <Link to='/login' className='text-lg font-semibold bg-primary hover:bg-secondary hover:text-black p-2 rounded-full'>Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage