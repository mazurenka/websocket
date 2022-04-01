import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {ProfileType, UserType} from "./types";
import {profileAPI, usersAPI} from "./api";

const useUsers = () => {
    const [users, setUsers] = useState<Array<UserType>>([])
    useEffect(() => {
        const requestUsers = async () => {
            let result = await usersAPI.getUsers(329, 10)
            setUsers(result.items)
        }
        requestUsers()
    }, [])
    return users
}

function UsersManagement() {
    const [userId, setUserId] = useState<number | null>(null)
    //const [profile, setProfile] = useState<ProfileType | null>(null)

    console.log('App rendered')

   const users = useUsers()

    const loadProfile = useCallback((userId: number) => {
        const loadProfile = async () => {
            let result = await profileAPI.getProfile(userId)
            setProfile(result)
        }
        loadProfile()
    }, [setProfile])

    return (
        <div className={'App'}>
            <List users={users} onClick={loadProfile}/>
            <Details userId={userId}/>
        </div>
    )
}

type UsersPropsType = {
    users: UserType[]
    onClick: (userId: number) => void
}

const List = React.memo(function (props: UsersPropsType) {
    console.log('Users render')
    return (
        <ul>
            {props.users.map(u => <li key={u.id} onClick={() => props.onClick(u.id)}>{u.name}</li>)}
        </ul>
    )
})

type DetailsPropsType = {
    userId: number | null
}



function Details(props: DetailsPropsType) {
    const [profile, setProfile] = useState<ProfileType | null>(null)
    console.log('Details rendered')

    useEffect(() => {
        if (props.userId === null) return

    }, [])




    let photoSrc = props.profile.photos.small ? props.profile.photos.small : ''

    return (
        <div>
            {props.profile.fullName}
            < img src={photoSrc}/>
        </div>
    )
}

export default UsersManagement;








