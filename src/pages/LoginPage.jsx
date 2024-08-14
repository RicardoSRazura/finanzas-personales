import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function LoginPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data =>{
        signin(data)
        console.log(data)
    })

    useEffect(() =>{
        if(isAuthenticated) navigate('/profile');
    }, [isAuthenticated]);

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-primary max-w-md w-full p-10 rounded-md '>
                {signinErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                        {error}
                    </div>
                ))}

                <h1 className='text-5xl font-bold my-4'>Login</h1>

                <form onSubmit={onSubmit}>
                    <input type="email" placeholder='Email' {...register("email", {required: true})}
                        className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'
                    />
                    {errors.email && (<p className='text-red-500'>email requerido</p>)}
                    <input type="password" placeholder='Contraseña' {...register("contrasena", {required: true})}
                        className='w-full bg-secondary text-black px-4 py-2 rounded-md my-2'
                    />
                    {errors.contrasena && (<p className='text-red-500'>contraseña requerida</p>)}
                    <button type='sumbit' className='text-lg bg-primary hover:bg-secondary hover:text-black  p-2 text-white font-bold py-2 px-4 my-2 rounded'>Login</button>
                </form>

                <p className='flex gap-x-2 justify-between items-center text-lg font-semibold'>¿Aun no estas registrado? <Link to='/register' className='text-lg font-semibold bg-primary hover:bg-secondary hover:text-black p-2 rounded-full'>Registrarte</Link></p>
            </div>
        </div>
    )
}

export default LoginPage