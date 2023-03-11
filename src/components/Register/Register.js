import './Style.css'
import React, { useEffect, useState } from 'react'
import { createPayment, createUser, fetchUser, getBatches, getBatch } from '../../api/index'
const Register = () => {
    // const dispatch = useDispatch()
    const [user, setUser] = useState({ first_name: '', last_name: '', phone_no: '', email: '', address: '', gender: '', age: 0, height: 0, weight: 0 })

    const [showLoading, setShowloading] = useState(false);

    const [payment, setPayment] = useState({ price: 0, batch_id: '', userId: '' })

    const [showSubscription, setShowSubscription] = useState(false)

    const [userId, setUserId] = useState('')

    const [batches, setBatches] = useState([])

    const [directSubscribe, setDirectSubscribe] = useState(false);

    const [emailId, setemailId] = useState('');


    useEffect(() => {
        getBatches().then((res) => {
            setBatches(res.data);
        })
    })


    const handleSubmit = () => {
        setShowloading(true)
        setDirectSubscribe(false);
        setShowSubscription(true);
        setShowloading(false);
        if (user.first_name === '' || user.last_name === '' || user.phone_no === '' || user.email === '' || user.age === '' || user.gender === '') {
            alert('Please fill the required fields!');
        }
        setUser({ ...user, age: Number(user.age), height: Number(user.height), weight: Number(user.weight) });
        console.log(user)
        createUser(user).then((res) => {
            console.log(res)
            setUserId(res.data.user.id)
            setDirectSubscribe(false);
            setShowSubscription(true);
            setShowloading(false);
        }).catch((error) => {
            console.log(error)
            setShowloading(false);
        })
    }

    const handleSubscribe = async (e) => {
        setShowloading(true)
        console.log(directSubscribe)

        // setPayment({...payment,price: Number(payment.price)});
        if (!directSubscribe) {
            setPayment({ ...payment, userId: userId })
        }
        
        await searchUser();
        console.log(payment)
        createPayment(payment).then((res) => {
            console.log(res)
            setShowloading(false)
            alert('Subscription succesful!')
        }).catch((error) => {
            console.log(error)
            setShowloading(false)
        })
        if (payment.batch_id === '' || payment.userId === '') {
            alert('Please fill up the required fields!');
        }
        setShowSubscription(false);

    }

    const handleChange = async (e) => {
        getBatch(e.target.value).then((res) => {
            // setPrice(res.data.batch.price)
            setPayment({ ...payment, price: res.data.batch.price, batch_id: res.data.batch.id })

        }).catch((error) => {
            console.log(error);
        })
    }

    const handleEmail = async (e) => {
        setemailId(e.target.value)
        console.log(emailId)
    }

    const searchUser = async () => {
        console.log(emailId)
        await fetchUser(emailId).then((res) => {
            console.log(res.data);
            setPayment({ ...payment, userId: res.data.user.id })
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleExistingSubscribe = async (e) => {
        setShowloading(true);
        setShowSubscription(true);
        setDirectSubscribe(true);
        setShowloading(false);
    }


    return (
        <div className='body'>
            {!showSubscription ?
                <form id='createForm'>
                    <div className='card'>
                        <div className='heading'>Create User</div>
                        <div className='form'>
                            <div className='half'>
                                <div className='inputBox'>
                                    <input className='input' type='text' placeholder='First Name*' value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
                                </div>
                                <div className='inputBox'>
                                    <input className='input' type='text' placeholder='Last Name*' value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                                </div>
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='tel' placeholder='Contact No.*' value={user.phone_no} onChange={(e) => setUser({ ...user, phone_no: e.target.value })} />
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='Email*' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>
                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='Address' value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                            </div>
                            <div className='half'>
                                <div className='inputBox'>
                                    <input className='input' type="number" placeholder='Age*' value={user.age === 0 ? '' : user.age} onChange={(e) => setUser({ ...user, age: parseInt(e.target.value) })} />
                                </div>
                                <div >
                                    <select id='batches' name='gender' className='selectg' onChange={(e) => setUser({ ...user, gender: e.target.value })}>
                                        <option value='' className='options'>Gender*</option>
                                        <option value='MALE' className='options'>MALE</option>
                                        <option value='FEMALE' className='options'>FEMALE</option>
                                    </select>
                                </div>
                            </div>
                            <div className='half'>
                                <div className='inputBox'>
                                    <input className='input' type='number' placeholder='Height' value={user.height === 0 ? '' : user.height} onChange={(e) => setUser({ ...user, height: parseInt(e.target.value) })} />
                                </div>
                                <div className='inputBox'>
                                    <input className='input' type='number' placeholder='Weight' value={user.weight === 0 ? '' : user.weight} onChange={(e) => setUser({ ...user, weight: parseInt(e.target.value) })} />
                                </div>
                            </div>
                        </div>
                        <button className='Button' onClick={()=>handleSubmit()} >{showLoading ? <div class="loader"></div> : "Create"}</button>

                        <button className='Button' onClick={handleExistingSubscribe} >{showLoading ? <div class="loader"></div> : "Already created? Subscribe now"}</button>
                    </div>
                </form>


                :


                <div className='card'>
                    <div className='heading'>Subscription</div>
                    <div className='form'>
                        {directSubscribe ?
                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='Email*' autocomplete="off" value={emailId} onChange={handleEmail} />
                            </div>

                            :

                            <div className='inputBox'>
                                <input className='input' type='text' placeholder='User ID*' value={userId} onChange={(e) => setPayment({ ...payment, userId: userId })} />
                            </div>

                        }
                        <div >
                            <select id='batches' name='batches' className='select' onChange={handleChange}>
                                <option className='options'>Batch*</option>
                                {batches.map((batch) => (
                                    <option key={batch.id} value={batch.id} className='options'>{(batch.startTime / 60) < 12 ? `${batch.startTime / 60}AM` : `${(batch.startTime / 60) - 12}PM`}-{(batch.endTime / 60 < 12) ? `${batch.endTime / 60}AM` : `${(batch.endTime / 60) - 12}PM`}</option>
                                ))}
                            </select>
                        </div>
                        <div className='inputBox'>
                            <input className='input' type='number' placeholder='Price*' value={payment.price === 0 ? '' : payment.price} />
                        </div>
                    </div>
                    <button className='Button' onClick={handleSubscribe}>{showLoading ? <div class="loader"></div> : "Subscribe"}</button>
                </div>}

        </div>
    )
}

export default Register;

