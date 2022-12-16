import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import usehook from './hooks/usehook'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const { users,
    createNewUser,
    getAllUsers,
    deleteUserById,
    updateUserById
  } = usehook()

  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <header className='app-header'>
        <h1 className='app-title'>USERS</h1>
      </header>
      <button onClick={() => setCloseForm(false)} className='app-btn' ><img className='img-app' src="/user-add.png" alt="" /></button>
      <div className={`form-container ${closeForm && 'close-form'}`}>
        <UsersForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setupadteInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>

      <div className='user-container'>
        {
          users?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div >
  )
}

export default App
