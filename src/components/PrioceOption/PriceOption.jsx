import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 p-4 rounded-md text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-3xl font-extrabold'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx)=> <Feature key={idx} feature={feature}></Feature> )
            }
            </div>
            <button className='mt-10 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
    }

export default PriceOption;