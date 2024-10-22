import profile from '../../../assets/profile/profile.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-5 border-b border-gray-100'>
             <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
             <img className='w-10 h-10 object-cover rounded-full' src={profile} alt="" />
        </div>
    );
};

export default Header;