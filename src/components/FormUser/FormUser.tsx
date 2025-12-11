import {roles} from '../../globalConstants.ts';
import * as React from 'react';
import {useState} from 'react';
import type {IUser} from '../../types';
import {toast} from 'react-toastify';

interface Props {
    addUserData:(userData: IUser) => void;
}


const FormUser: React.FC<Props> = ({addUserData}) => {


    const [form, setForm] = useState<IUser>({
        name: '',
        email: '',
        active: false,
        role: 'user'
    });


    const isActiveFn = () => {
        setForm(prev => ({
            ...prev,
            active: !prev.active,
        }));
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const  {name, value} = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.name.trim().length === 0 || form.email.trim().length === 0) {
            toast.error('Пожалуйста введите верную почту или имя!');
        }

        addUserData({...form});
        setForm({name:'', email: '', active: false, role: 'user'});
    }

    return (
       <div>

           <h4 className='my-4'>User Form</h4>

                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                         <label htmlFor='name'>Name</label>
                    <input
                        type="text"
                        name='name'
                        value={form.name}
                        onChange={onInputChange}
                        id="name"
                        className="form-control"
                        required
                    />
                    </div>

                    <div className='form-group my-2'>
                        <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name='email'
                        value={form.email}
                        onChange={onInputChange}
                        id="email"
                        className="form-control"
                        required
                    />
                    </div>

                     <div className='form-group'>
                         <label htmlFor='active' className='my-2' >
                             <input
                                type="checkbox"
                                name='active'
                                id="active"
                                checked={form.active}
                                onChange={isActiveFn}
                             />
                             <span className='mx-1'>Активен: {form.active ? 'Да' : 'Нет'}</span>
                         </label>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            name='role'
                            className="form-control"
                            value={form.role}
                            onChange={onInputChange}
                        >
                            {roles.map((role: string) => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>

                    <div className='my-4'>
                        <button type='submit' className='btn btn-primary'>Add user</button>
                    </div>
                </form>
       </div>
    );
};

export default FormUser;