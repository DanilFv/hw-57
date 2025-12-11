import './App.css';
import type {IUser} from './types';
import FormUser from './components/FormUser/FormUser.tsx';
import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';

const App = () => {

     const [users, setUsers] = useState<IUser[]>([]);


    const addUserData = (userData: IUser) => {
        const user = users.find(user => user.email === userData.email);

        if (user) {
            toast.error('Пользователь с таким email уже существует');
            return;
        }

        setUsers(prevState => [...prevState, userData]);
        toast.success('Вы успешно добавили пользователя!');
    }


    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className='d-flex gap-4'>
                    <FormUser addUserData={addUserData}  />
                </div>
            </div>
        </>
    )
};

export default App
