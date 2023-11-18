import Subscribe from '../Components/Home/Subscribe';
import ServicesCard from '../Components/Services/ServicesCard';
import NavBar from './NavBar';

const ServicePage = () => {
    return (
        <NavBar>
            <div className='p-16 bg-blue-200'>
                <h1 className='text-xl font-bold text-yellow-500'>Team</h1>
                <p className='font-semibold my-4 text-yellow-500'>{'Home  > '} <span className='text-green-400'>Our Services</span> </p>
            </div>
            <ServicesCard/>
            <Subscribe/>
        </NavBar> 
    );    
};

export default ServicePage;