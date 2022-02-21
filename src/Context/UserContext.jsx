import { useState, createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider(props) {

    //create the users array for the system + create a function that can change the users array 
    const [users, SetUsers] = useState([
        {
            firstName: `Daniel`,
            lastName: `Arzouan`,
            dob: `2000-11-11`,
            email:`daniel@daniel.com`,
            password: `abc123`,
            phone:`111111111`
        },
        {
            firstName: `Yael`,
            lastName: `Naor`,
            dob: `2000-05-03`,
            email:`yael@yael.com`,
            password: `abc111`,
            phone:`222222222`
        },
        {
            firstName: `Admin`,
            lastName: `Administrator`,
            dob: `2000-01-01`,
            email:`admin@admin.com`,
            password: `aaa123`,
            phone:`222222222`
        }
    ]);

    const [currentUser, SetCurrentUser] = useState(null);

    const AddUser = (newUser) => {
        //check if email already exists in the array
        if (users.some(user => user.email === newUser.email))
            return false;
        SetUsers((currentUsers) => [...currentUsers, newUser]);
        return true;
    }

    const FindUser = (email, password) => {
        //search and save the user with the same credentials
        
        let u =  users.find(user => user.email === email && user.password === password);
        if(u != null || u != undefined){
            SetCurrentUser(u)
            return true;
        }
        return false;
    }

    const RemoveUser=(userToRemove)=>{
        SetUsers(users.filter((user)=>user.email != userToRemove.email))
    }

    //find the user  and change his details at the same index
    const EditUser = (userToUpdate) => {
        let allUsers = users.map(user => {
            if (user.email === userToUpdate.email)
                user = userToUpdate;
            return user;
        })

        SetUsers(allUsers);
        SetCurrentUser(userToUpdate);
    }

    return (
        <UserContext.Provider value={{ users, RemoveUser, AddUser, FindUser, EditUser, currentUser }}>
            {props.children}
        </UserContext.Provider>
    )

}