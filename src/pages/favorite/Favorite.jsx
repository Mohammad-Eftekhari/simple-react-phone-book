import React from 'react'
import { FaEye, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { useRouteMatch, Switch , Route ,useHistory } from 'react-router-dom'
import UserInfo from '../userInfo/UserInfo';

function Favorite({ favorite, setFavorite }) {

  const {path} = useRouteMatch();
  let history = useHistory();

  return (
    <Switch>
      <Route exact path={path}>
      <div>
      <div className="my-contact">
        <div className="header w-100 d-flex justify-content-center">
          <h2>Favorite</h2>
        </div>
        <div className="contact-container p-3">
          {
            favorite.map(item => (
              <div onClick={()=>(history.push('/'+item.id))} className="contact-card my-2 w-100">
                <div className="card-info">
                  <div
                    className="
                  img-container 
                  d-flex 
                  justify-content-center 
                  align-items-center
                  ">
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
                  <FaRegEdit />
                  <FaRegTrashAlt />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
      </Route>
      <Route 
                    path={`${path}/:id`} 
                    render={()=> <UserInfo />} />
    </Switch>
  )
}

export default Favorite
