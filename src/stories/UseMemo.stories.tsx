import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultDecision = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)


    let resultA = 1;
    let resultB = 1;

    resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= b; i++) {
            let x = 0;
            while (x < 10000) {
                x++
                const xValue = Math.random()
            }
            tempResultB = tempResultB * i
        }
        return tempResultB
    }, [b])

    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }


    return (
        <>
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={e => setB(+(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('call Users')
    return (
        <div>{props.users.map((u, i) => {
            return (<div key={i}>{u}</div>)
        })}</div>
    )
}


const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Fedor', 'Petr', 'Gleb', 'Oleg'])

    const newUsers = useMemo(() => {
        const newUsers = users.filter(u => u.length < 5)
        return newUsers
    }, [users])

    const AddUser = () => {
        const newUser = [...users]
        newUser.push('Igor')
        setUsers(newUser)
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={() => AddUser()}>add user</button>
        <Users users={newUsers}/>
    </>

}

