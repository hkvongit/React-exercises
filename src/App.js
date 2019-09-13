import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'

function App(props) {
  const [email,setEmail] = useState(null)
  const [name, setName] = useState(null)

  const handleEmailChange = (event)=>{
    setEmail(event.target.value)
  }

  const handleNameChange = (event)=>{
    setName(event.target.value)
  }
  const handleSubmit = ()=>{
    props.AddUser(email,name)
  }

  return (
    <div className="App">
      {props.book}
      <button onClick={props.BookUp}>UP</button>
      <button onClick={props.BookDown}>DOWN</button>
      <br/>
      <br/>
      <li>
      {props.user.map(u=>{
        return(<ul key ={u.name}>{u.name}</ul>)
      })}
      </li>
      <br/>
      {props.article}
      <br/>
        Email Address<input placeholder="email" onChange={handleEmailChange}/>
        Name <input placeholder="name" onChange={handleNameChange}/>
        <button onClick={handleSubmit}>ADD USER</button>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return (
    {
      book : state.BookReducer.no,
      article : state.ArticleReducer.no,
      user: state.UserReducer
    }
  )
}
const mapActionToProps = (action) =>{
  return{
    BookUp: () =>{action({type:"BOOK_UP"})},
    BookDown: () =>{action({type:"BOOK_DOWN"})},
    AddUser: (useremail,username) =>{action({type:'ADD_USER',payload:{email:useremail, name:username}})}
  }
}
export default connect(mapStateToProps,mapActionToProps)(App);
