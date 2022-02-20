import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('User')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sveta', 'Ira', 'Dasha', 'Oleg'])

    const AddUser = () => {
        const newUser = [...users]
        newUser.push('Igor' + new Date().getTime())
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={AddUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}