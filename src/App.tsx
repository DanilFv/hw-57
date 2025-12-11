import './App.css';
import type {IUser} from './types';
import FormUser from './components/FormUser/FormUser.tsx';
import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import Users from './components/User/Users.tsx';
import UserItem from './components/User/UserItem/UserItem.tsx';


const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const addUserData = (userData: IUser) => {
        const userCopy = users.find(user => user.email === userData.email);

        if (userCopy) {
            toast.error('Пользователь с таким email уже существует');
            return;
        }

        setUsers(prevState => [...prevState, userData]);
        toast.success('Вы успешно добавили пользователя!');
    };


    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className='d-flex gap-4'>
                    <FormUser addUserData={addUserData} />
                    <Users className='card shadow-sm p-3 my-4' style={{ width: "300px" }}>
                        <UserItem users={users} />
                    </Users>
                </div>
            </div>
        </>
    )
};

export default App
