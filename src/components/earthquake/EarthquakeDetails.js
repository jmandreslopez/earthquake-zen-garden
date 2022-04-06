import React from 'react';
import { formatTimestamp } from '../../utils/utils';

const EarthquakeDetails = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Title</strong>
                </div>
                <div className="col-8 col-md-8">
                    {props.title}
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Magnitude</strong>
                </div>
                <div className="col-8 col-md-8">
                    {props.magnitude}
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Time</strong>
                </div>
                <div className="col-8 col-md-8">
                    {formatTimestamp(props?.time)}
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Status</strong>
                </div>
                <div className="col-8 col-md-8">
                    {props?.status}
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Tsunami</strong>
                </div>
                <div className="col-8 col-md-8">
                    {props?.tsunami}
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-md-2 offset-md-2">
                    <strong>Type</strong>
                </div>
                <div className="col-8 col-md-8">
                    {props?.type}
                </div>
            </div>
        </React.Fragment>
    );
};

export default EarthquakeDetails;
