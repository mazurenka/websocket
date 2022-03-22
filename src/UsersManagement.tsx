import React, {useEffect, useState} from "react";
import {ProfileType, UserType} from "./types";
import {usersAPI} from "./api";


export function UsersManagement() {
    const [users, setUsers] = useState<Array<UserType>>([])
    const [profile, setProfile] = useState(null)

    console.log('App render')

    useEffect(() => {
        const requestUsers = async () => {
            let result = await usersAPI.getUsers()
            setUsers(result.items)
        }
        requestUsers()
    }, [])

    return (
        <div className={'App'}>
            <List users={users}/>
            <Details profile={profile}/>
        </div>
    )
}

type UsersPropsType = {
    users: UserType[]
}

function List(props: UsersPropsType) {
    console.log('Users render')
    return (
        <ul>
            {props.users.map(u => <li>{u.name}</li>)}
        </ul>
    )
}

type DetailsPropsType = {
    profile: ProfileType
}

function Details(props: DetailsPropsType) {
    console.log('Details rendered')

    if (props.profile === null) return <div>-----</div>
    let photoSrc = props.profile.photos.small ? props.profile.photos.small : ''

    return (
        <div>
            {props.profile.fullName}
            < img src={photoSrc}/>
        </div>
    )
}










