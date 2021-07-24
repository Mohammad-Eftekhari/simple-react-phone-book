import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaUserAlt, FaHeart, FaUserPlus } from 'react-icons/fa'
import { Switch, Route, useHistory } from 'react-router-dom'
import data from './data'



import routes from './routes'

function App() {

  const [contacts, setContacts] = useState(data)
  const [favorite, setFavorite] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [itemIndex, setItemIndex] = useState(-1)
  

  let history = useHistory()
  function goFavorite() {
    history.push("/favorite")
  }
  function goAddContact() {
    history.push("/add")
  }
  function goContacts() {
    history.push("/")
  }

  return (
    <>
      <Switch>

        {
          routes.map((item , index) => (
            <Route path={item.path}
              exact={item.exact}
              render={() => <item.component
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
              />} />
          ))
        }

      </Switch>

      <div>
        <footer>
          <div className="footer-item contacts" onClick={goContacts}><FaUserAlt /></div>
          <div className="footer-item favorite" onClick={goFavorite}><FaHeart /></div>
          <div className="footer-item favorite" onClick={goAddContact}><FaUserPlus /></div>
        </footer>
      </div>
    </>
  );
}

export default App;
