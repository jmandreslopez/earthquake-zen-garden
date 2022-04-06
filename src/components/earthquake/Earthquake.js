import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimestamp } from '../../utils/utils';

const Earthquake = (props) => {
    return (
        <div className="row g-0">
            <div className="col-5">
                <Link to={`/details/${props.id}`}>
                  {props.title}
                </Link>
            </div>
            <div className="col-3 text-center">
                {props.magnitude}
            </div>
            <div className="col-4 text-center">
                {formatTimestamp(props.time)}
            </div>
        </div>
    );
};

export default Earthquake;
