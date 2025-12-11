import * as React from 'react';

interface Props extends React.PropsWithChildren{
    className?: string;
    style?: object;
}

const Users: React.FC<Props> = ({className, style, children}) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};

export default Users;