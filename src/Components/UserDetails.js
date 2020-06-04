import React from 'react'
import UserList from './UserList'
import Card from 'react-bootstrap/Card'

const UserDetails=(props)=> {
    console.log('mariem')
    console.log(props)
    let {user} = props.location.state
    console.log(user)
    return (
        <React.Fragment>
            <Card>
              <Card.Header as="h5">{user.name}</Card.Header>
              <Card.Body>
                <Card.Title>Username:{user.username}</Card.Title>
                <Card.Text>
                  <p>Email: {user.email}</p>
                  Phone: {user.phone}<br/>
                  Website: {user.website}<br/>
                  Street: {user.address.street}<br/>
                  Suite: {user.address.suite}<br/>
                  City: {user.address.city}<br/>
                  Company name: {user.company.name}<br/>


                </Card.Text>
              </Card.Body>
            </Card>
 
                  
                
            
        </React.Fragment>
    )
}

export default UserDetails
