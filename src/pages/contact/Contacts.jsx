import React from 'react'
import ContactCard from '../../components/contactCard/ContactCard'


function Contacts({
    contacts,
    setContacts,
    favorite,
    setFavorite,
    editMode,
    setEditMode,
    name,
    setName,
    phone,
    setPhone,
    index,
    itemIndex,
    setItemIndex
}) {
    return (
        <div>
            <div className="my-contact">
                <div className="
                header 
                w-100 
                d-flex 
                justify-content-center
                ">
                    <h2>Contacts</h2>
                </div>
                <div className="contact-container p-3">
                    <ContactCard
                        contacts={contacts}
                        setContacts={setContacts}
                        favorite={favorite}
                        setFavorite={setFavorite}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        name={name}
                        setName={setName}
                        phone={phone}
                        setPhone={setPhone}
                        index={index}
                        itemIndex={itemIndex}
                        setItemIndex={setItemIndex}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contacts
