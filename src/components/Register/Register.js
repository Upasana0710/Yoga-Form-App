import './Style.css'
import React, { useEffect, useState } from 'react'
import {createPayment, createUser, getBatches} from '../../api/index'
const Register = () => {
    // const dispatch = useDispatch()
    const [user, setUser] = useState({first_name:'',last_name:'',phone_no:'',email:'',address:'',age:0,height:0,weight:0})

    const [payment, setPayment] = useState({price:0,batch_id:'',userId:''})

    const [showSubscription, setShowSubscription] = useState(true)

    const [userId, setUserId] = useState('')

    const [batch_id, setBatch_id] = useState('')
    const [batches,setBatches] = useState([])

    useEffect(() =>{
        getBatches().then((res)=>{
            setBatches(res.data);
        })
    })

    const handleSubmit = async (e) => {
        setUser({...user,age:Number(user.age),height:Number(user.height),weight:Number(user.weight)});
        console.log(user)
        await createUser(user).then((res)=>{
            console.log(res)
            setUserId(res.data.user.id)
            setShowSubscription(false);
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSubscribe = async (e) =>{
        setShowSubscription(true);
        setPayment({...payment,price: Number(payment.price)});
        setPayment({...payment,userId:userId})
        console.log(payment)
        createPayment(payment).then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })

    }

    return (
        <div className='body'>
            {showSubscription ?
                <div className='card'>
                    <div className='heading'>Create User</div>
                    <div className='form'>
                        <div className='half'>
                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='First Name*' value={user.first_name} onChange = {(e)=> setUser({...user,first_name:e.target.value})}/>
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='Last Name*' value={user.last_name} onChange={(e)=>setUser({...user,last_name:e.target.value})}/>
                            </div>
                        </div>
                        <div className='inputBox'>
                            <input className='input' type='tel' placeholder='Contact No.*' value = {user.phone_no} onChange={(e)=>setUser({...user,phone_no:e.target.value})}/>
                        </div>
                        <div className='inputBox'>
                            <input className='input' type='text' placeholder='Email*' value={user.email} onChange={(e)=>setUser({...user,email: e.target.value})}/>
                        </div>
                        <div className='inputBox'>
                            <input className='input' type='text' placeholder='Address' value={user.address} onChange={(e)=>setUser({...user,address: e.target.value})}/>
                        </div>
                        <div className='half'>
                            <div className='inputBox'>
                                <input className='input' type="number" placeholder='Age*' value={user.age === 0?'':user.age} onChange={(e)=>setUser({...user,age: parseInt(e.target.value)})}/>
                            </div>
                            <div >
                                {/* <input className='input' type='text' placeholder='Gender*' value={user.gender} onChange={(e)=>setUser({...user,gender: e.target.value})}/> */}
                                <select id='batches' name='gender' className='selectg' onChange={(e)=>setUser({...user,gender: e.target.value})}>
                                <option value='MALE' className='options'>Gender*</option>
                                <option value='MALE' className='options'>MALE</option>
                                <option value='FEMALE' className='options'>FEMALE</option>
                            </select>
                            </div>
                        </div>
                        <div className='half'>
                            <div className='inputBox'>
                                <input className='input' type='number' placeholder='Height' value={user.height === 0? '':user.height} onChange={(e)=>setUser({...user,height: e.target.value})}/>
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='number' placeholder='Weight' value={user.weight === 0?'':user.weight} onChange={(e)=>setUser({...user,weight: e.target.value})}/>
                            </div>
                        </div>
                    </div>
                    <button className='Button' onClick = {handleSubmit} >Create</button>
                </div>


                : 


                <div className='card'>
                    <div className='heading'>Subscription</div>
                    <div className='form'>
                        <div className='inputBox'>
                            <input className='input' type='text' placeholder='User ID*' value={userId} onChange={(e)=>setPayment({...payment,userId:userId})}/>
                        </div>
                        <div >
                            <select id='batches' name='batches' className='select'onChange={(e)=>setPayment({...payment,batch_id: e.target.value})}>
                                <option className='options'>Batch*</option>
                                {batches.map((batch) => (
                                    <option key ={batch.id} value={batch.id} className='options'>{`${batch.startTime} ${batch.endTime}`}</option>
                                ))}
                            </select>
                        </div>
                        <div className='inputBox'>
                            <input className='input' type='text' placeholder='Price' value={payment.price === 0? '' : payment.price} onChange={(e)=>setPayment({...payment,price:e.target.value})}/>
                        </div>
                    </div>
                    <button className='Button' onClick={handleSubscribe}>Subscribe</button>
                </div>}

        </div>
    )
}

export default Register;

