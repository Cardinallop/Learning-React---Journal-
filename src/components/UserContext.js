import React from 'react';

export const UserContext = React.createContext({});

const user = {
    name: 'Bobur',
    email: 'boburmurtozaev00@gmail.com',
    instagram: 'liberat_te'
};

export const User = () => {
    return (
        <UserContext.Provider value={user}>
            <DisplayUser />
        </UserContext.Provider>
    );
}

const Name = ({ user}) => (
    <h2>User: {user.name}</h2>
);

const Email = ({ user}) => (
    <a href={`mailto:${user.email}`}>{user.email</a>
);

const Instagram = () => (
    <UserContext.Consumer>
        {(user) => (
            <a href={`instagram.com/${user.instagram}`}>{user.instagram}</a>
        )}
    </UserContext.Consumer>
);

const DisplayUser = () => {
    return (
        <UserContext.Consumer>
            {(user) => (
                <div>
                    <Name user={user}/>
                    <Email user={user}/>
                    <br/>
                    <Instagram/>
                </div>
            )}
        </UserContext.Consumer>
    );
}