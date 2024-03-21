import PropTypes from 'prop-types'
import { GiCheckMark } from "react-icons/gi";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center '> <GiCheckMark className='mr-2 text-green-400'></GiCheckMark> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}

export default Feature;