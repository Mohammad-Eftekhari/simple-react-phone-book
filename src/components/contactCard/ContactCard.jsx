import React,{useState , useEffect} from 'react'
import { useRouteMatch, Switch , Route ,useHistory } from 'react-router-dom'
import { FaEye, FaRegEdit, FaRegTrashAlt, FaHeart } from 'react-icons/fa'
import UserInfo from '../../pages/userInfo/UserInfo' 
import AddContact from '../../pages/addContact/AddContact'

const ContactCard = ({
    contacts , 
    setContacts ,
    setFavorite ,
    favorite,
    editMode,
    setEditMode,
    name, 
    setName, 
    phone, 
    setPhone,
    index,
    itemIndex,
    setItemIndex
    }) => {


    const history = useHistory();
    const {path} = useRouteMatch();

    function remove( e,Id) {
        e.stopPropagation();
        setContacts(contacts.filter((item)=>item.id !== Id));
    }

    function addFavorite(e, Id) {
        e.stopPropagation();
        let myFavorite = contacts.find((item)=> item.id === Id)
        setFavorite([...favorite,myFavorite])
    }

    function editContacts(e,Id) {
        e.stopPropagation();
        history.push('/add');
        setEditMode(true)
        const editItem = contacts.find((item)=>item.id == Id)
        const editItemIndex = contacts.findIndex((item)=>item.id == Id)
        setItemIndex(editItemIndex)
        setName(editItem.name)
        setPhone(editItem.phone)

    }

    
    return (
        <>
            <Switch>
                <Route exact path={path}>
                {
                contacts.map(item => (
                        <div onClick={()=>(history.push('/'+item.id))} className="contact-card w-100 my-2">
                        <div className="card-info">
                            <div
                                className=
                                "img-container 
                                d-flex 
                                justify-content-center 
                                align-items-center">
                                <h4>{item.name.charAt(0)}</h4>
                            </div>
                            <div className="mx-2">
                                <h5>
                                    {item.name}
                                </h5>
                            </div>
                        </div>
                        <div className="card-actions">
                            <FaEye />
                            <FaRegEdit onClick={(e)=>{editContacts(e,item.id)}}/>
                            <FaHeart onClick={(e)=>addFavorite(e,item.id)}/>
                            <FaRegTrashAlt onClick={(e)=>remove(e,item.id)}/>
                        </div>
                    </div>
                        ))
                    }
                </Route>
                <Route 
                    path={`${path}/:id`} 
                    render={()=> <UserInfo contacts={contacts} setContacts={setContacts} />} />
            </Switch>
        </>
    )
}

export default ContactCard
