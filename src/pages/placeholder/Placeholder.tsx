import React from 'react'
import empty from '../../assets/image/empty.svg'
import '../placeholder/placeholder.scss';
const Placeholder: React.FC<{ pageName: string }> = ({ pageName }) => {
    return (
        <div className='placeholder'>
            <img src={empty} alt="empty icon" />
            <p>{pageName} is an empty page.</p>
        </div>
    );
};

export default Placeholder;