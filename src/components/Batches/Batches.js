import './Style.css'
import React, { useEffect, useState } from 'react'
import { getBatches } from '../../api/index'

export const Batches = () => {
    const [batches, setBatches] = useState([])
    
    useEffect(() => {
        getBatches().then((res) => {
            setBatches(res.data);
        })
    })
    return (
        <div className='full'>
            <div className='container'>
                <div className='heading'>Batches</div>
                <div className='cards' >
                {batches.map((batch,index) => (
                    
                        <div className='batchCard' key={batch.id}>
                            <div className={`upperPart${index+1}`}>
                                <div className='batchName'>Batch {index+1}</div>
                                <div className='maxCapacity'>Max Capacity: {batch.batch_capacity_max}</div>
                            </div>
                            <div className='lowerPart'>
                                <div className='time'><span className='forBold'>Timings:</span><span> 6AM-7AM</span></div>
                                <div className='capacity'><span className='forBold'>Currrent Capacity:</span><span> {batch.batch_capacity_current}</span></div>
                                <div className='price'><span className='forBold'>Price:</span><span className='amount'> {batch.price}/-</span></div>
                            </div>
                        </div>

                    
                ))}
                </div>
               
            </div>
        </div>
    )
}

export default Batches;
