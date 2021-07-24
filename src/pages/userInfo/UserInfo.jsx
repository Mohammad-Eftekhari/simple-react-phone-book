import React from 'react'
import { useParams } from 'react-router-dom'

function UserInfo({ contacts, setContacts }) {
    const { id } = useParams();

    const user = contacts.find((item) => (item.id == id))
    return (
        <div className="my-contact">
            <div className="header w-100 d-flex justify-content-center">
                <h2>{user.name}</h2>
            </div>
            <div className="contact-container p-3">
                <h2>Phone: +{user.phone}</h2>
            </div>
        </div>
    )

}

export default UserInfo
