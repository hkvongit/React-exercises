class User {
    constructor(email, name){
        this.email=email
        this.name = name
    }
}

const userOne = new User ("hari@mail.com", 'hari')
const userTwo = new User ('sri@mail.com', 'sri')

const Users = [userOne,userTwo]

const UserReducer = (state=Users, action)=>{
    switch(action.type){
        case 'ADD_USER':
            let newUSer = new User (action.payload.email,action.payload.name)
            let newState =[...state,newUSer]
            return newState
        default:
            return state
    }
}
export default UserReducer