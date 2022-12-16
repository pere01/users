import React from 'react'
import './styles/usersList.css'
import '/user-edit-icon.png'
import '/trash-icon.png'

const UsersList = ({ user, deleteUserById, setUpdateInfo, setCloseForm }) => {

    const handleEdit = () => {
        setCloseForm(false)
        setUpdateInfo(user)
    }

    return (
        <article className='card'>
            <h3 className='card-title'>{user?.first_name} {user?.last_name}
            </h3>
            <ul className='card-body'>
                <li className='card-item'>
                    <span className='card-span'>Email: </span>{user?.email}
                </li>
                <li className='card-item'>
                    <span className='card-span'>Birthday: </span>{user?.birthday}
                </li>
            </ul>
            <footer className='card-footer'>
                <button onClick={() => deleteUserById(user.id)} className='card-btn card-btn-trash' ><img className='img-item' src="/trash-icon.png" alt="" /></button>
                <button onClick={handleEdit} className='card-btn card-btn-edit' ><img className='img-item' src="/user-edit-icon.png" alt="" /></button>
            </footer>
        </article>
    )

}
export default UsersList