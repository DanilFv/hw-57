import * as React from 'react';
import type {IUser} from '../../types';

interface Props {
    users: IUser[];
}

const UserItem: React.FC<Props> = ({users}) => {
    return (
        <div>
             {users.map((user: IUser) => (
                <div className='user-item mb-3' key={user.email}>
                    <h5 className='card-title mb-2'>{user.name}</h5>
                    <span className='d-block'><strong>Email: </strong>{user.email}</span>
                    <span><strong>Role: </strong>{user.role}</span>
                </div>
            ))}
        </div>
    );
};

export default UserItem;