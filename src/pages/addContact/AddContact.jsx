import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

function AddContact({
    contacts,
    setContacts,
    name,
    setName,
    phone,
    setPhone,
    editMode,
    setEditMode,
    itemIndex,
    setItemIndex
}) {


    function changeName(e) {
        setName(e.target.value)
    }
    function changePhone(e) {
        setPhone(e.target.value)

    }

    function clickToAddHandler() {
        if (name === "" || phone === "") {
            alert("Dont Add Empty Value")
        } else {
            let newCntct = {
                name: name,
                id: Date.now(),
                phone: phone,
            }
            setContacts([...contacts, newCntct])
            setName("");
            setPhone("");
        }
    }
    function clickToEditHandler() {
        if (name === "" || phone === "") {
            alert("Dont Add Empty Value")
        } else {
            const newData = [...contacts]
            let updateContact = {
                name: name,
                id: Date.now(),
                phone: phone,
            }
            newData.splice(+itemIndex , 1 , updateContact)
            setContacts(newData)
            setName("");
            setPhone("");
            setEditMode(false)
        }
    }


    return (
        <div>
            <div className="my-contact">
                <div className="header w-100 d-flex justify-content-center">
                    <h2>Contacts</h2>
                </div>
                <div className="contact-container py-3">
                    <div className="w-75">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            <FormControl
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={changeName}
                                value={name}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                            <FormControl
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={changePhone}
                                value={phone}
                            />
                        </InputGroup>

                                {
                                    !editMode ? 
                                    (<Button
                                    onClick={clickToAddHandler}
                                    className="w-100"
                                    variant="outline-dark">
                                    Add
                                </Button>)
                                    :
                                (<Button
                                    onClick={clickToEditHandler}
                                    className="w-100"
                                    variant="outline-dark">
                                    Edit
                                </Button>)
                                }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact