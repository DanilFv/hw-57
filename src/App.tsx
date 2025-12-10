import './App.css';
import type {IUser} from './types';
import FormUser from './components/FormUser/FormUser.tsx';
import {useState} from 'react';

const App = () => {

     const [users, setUsers] = useState<IUser[]>([]);


    const addUserData = (userData: IUser) => {
        console.log(userData);
    }


    return (
        <>
            <div className="container">
                <FormUser addUserData={addUserData} />
            </div>
        </>
    )
};

export default App
