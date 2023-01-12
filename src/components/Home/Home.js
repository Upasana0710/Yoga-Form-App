import './Style.css';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const handleRegister = () => {

    }
    return (
        <div className='hero-section'>
            <div className='upperSection'>
                <div className='left'>
                    <div className='mainText'>Invigorate your Body and Mind</div>

                    <div className='subText'>Unlock the strength and beauty of mind, body and soul</div>
                    <NavLink to='/register' className='button'>
                    <button className='Register' onClick={handleRegister}>Register Now</button>
                    </NavLink>
                </div>
                <div className='right'>
                    <img src='https://media.istockphoto.com/id/1307417259/video/woman-does-yoga-exercise-in-nature-lotus-pose-female-cartoon-character-demonstrating-yoga.jpg?s=640x640&k=20&c=RPdU8jP0sHHrDUBls6TkakdGkSKhSYibVOKqjEz0tNM=' alt='Yoga' />
                </div>
            </div>
            <div className='lowerSection'>
                <div className='card-wrapper'>
                    <div className='card1'>
                        <div className='uppercard1'>
                                <img className = 'img-holder2'src='https://t4.ftcdn.net/jpg/03/28/19/23/360_F_328192317_u5OEL6ECgH8OMJYqa2Rh5Gv70JNuKlM5.jpg' alt='Yoga'/>
                        </div>
                        <div className='text1'>
                        Yoga - Your personal guide to mindfulness.
                        </div>
                    </div>
                    <div className='card1'>
                        <div className='uppercard1'>
                                <img className = 'img-holder2'src='https://media.istockphoto.com/id/1332656082/vector/yoga-pose-healthy-living-tree-pose-illustration.jpg?s=612x612&w=0&k=20&c=IHwspu0FGyEGqX4NAgYSdZe2ldtzRvW-L_PvR7UYtpI=' alt='Yoga'/>
                        </div>
                        <div className='text1'>
                        Tune everyone into fitness
                        </div>
                    </div>
                    <div className='card1'>
                        <div className='uppercard1'>
                                <img className = 'img-holder2'src='https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-yoga-yoga-pose-posture-yoga-action-png-image_475244.jpg' alt='Yoga'/>
                        </div>
                        <div className='text1'>
                        Yoga is an inspiration towards joyful living
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Home