import User from './User.jsx'
function UsersList(props){
 
    return(
        <div className=''>
            {
                users.map((userObj,index)=>
                    <User key={index} user={userObj} />
                
           ) }
            </div>
    )
}
export default UsersList;