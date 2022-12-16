import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import './styles/usersForm.css'

const UsersForm = ({ createNewUser, updateInfo, updateUserById, setupadteInfo, setCloseForm }) => {

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const { register, reset, handleSubmit } = useForm()



    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setupadteInfo()
        } else {
            createNewUser(data)
        }
        setCloseForm(true)
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
        })
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <div onClick={() => setCloseForm(true)} className='x'>X</div>

            <h2 className='form-title'>{updateInfo ? 'Update User' : 'Create User'}</h2>
            <div className='form-div'>
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-inp' type="text" id='email' {...register("email")} />
            </div>
            <div className='form-div'>
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-inp' type="password" id='password' {...register("password")} />
            </div>
            <div className='form-div'>
                <label className='form-label' htmlFor="first_name">First Name</label>
                <input className='form-inp' type="text" id='first_name' {...register("first_name")} />
            </div>
            <div className='form-div'>
                <label className='form-label' htmlFor="last_name">Last Name</label>
                <input className='form-inp' type="text" id='last_name' {...register("last_name")} />
            </div>
            <div className='form-div'>
                <label className='form-label' htmlFor="birthday">Birthday</label>
                <input className='form-inp' type="date" id='birthday' {...register("birthday")} />
            </div>
            <button className='form-btn'>submit</button>
        </form>
    )
}

export default UsersForm