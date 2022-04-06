import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import EarthquakeDetails from '../components/earthquake/EarthquakeDetails';
import Headline from '../components/UI/Headline';
import DataContext from '../store/data-context';

const Detail = () => {
    const params = useParams();
    const earthquakeId = params.earthquakeId;
    const earthquakes = useContext(DataContext)?.data?.features;
    const earthquake = earthquakes.find((feature) => feature.id === earthquakeId)?.properties;

    // TODO Handle not found

    return (
        <div className="container">
            <Headline title={earthquake.title} />
            <EarthquakeDetails
                title={earthquake.title}
                magnitude={earthquake.mag}
                time={earthquake.time}
                status={earthquake.status}
                tsunami={earthquake.tsunami}
                type={earthquake.type}
            />
        </div>
    );
};

export default Detail;
