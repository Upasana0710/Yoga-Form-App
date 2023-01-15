import './Style.css';
import React, { useState, useEffect } from 'react'
import { fetchUsers } from '../../api';

const UserList = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    fetchUsers().then((res) => {
      setUserList(res.data);
    }).catch((error) => {
      console.log(error)
    })
    console.log(userList)
  })
  return (
    <div className='mainContainer'>
      <div className='Heading'>User List</div>
      <div className='userTable'>
        <div className='tableHead'>
          <div className='slhead'>User ID</div>
          <div className='Name'>Name</div>
          <div className='Age'>Age</div>
          <div className='gender'>Gender</div>
          <div className='height'>Height</div>
          <div className='weight'>Weight</div>
          <div className='phone'>Phone No.</div>
          <div className='emailHead'>Email ID</div>
          <div className='addressHead'>Address</div>
          <div className='paymentHead'>Payment</div>

        </div>
        {userList.map((user,index) => (
          <div className='userCard'>

            <div className='sl'>{user.id}</div>
            <div className='Name'>{user.first_name} {user.last_name}</div>
            <div className='Age'>{user.age}</div>
            <div className='gender'>{user.gender}</div>
            <div className='height'>{user.height}</div>
            <div className='weight'>{user.weight}</div>
            <div className='phone'>{user.phone_no}</div>
            <div className='email'>{user.email}</div>
            <div className='address'>{user.address}</div>
            <div className={user.payment_status ? "paymentp" : "paymentd "}>{user.payment_status ? "Paid" : "Due"}</div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList;
