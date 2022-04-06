import React, { useState, useEffect, useContext } from 'react';
import DataContext from '../../store/data-context';
import Earthquake from './Earthquake';

const EarthquakeList = () => {
    const [sort, setSort] = useState({ field: 'mag', direction: 'desc' });
    const sortEarthquakes = (collection, field, direction) => {
        return collection.sort((a, b) => {

            // 'Place' is a string, therefore is handle differently
            if (field === 'place') {
                if (direction === 'asc') {
                    if(a.properties[field] < b.properties[field]) { return -1; }
                    if(a.properties[field] > b.properties[field]) { return 1; }
                }
                if(a.properties[field] > b.properties[field]) { return -1; }
                if(a.properties[field] < b.properties[field]) { return 1; }
            }

            if (direction === 'asc') {
                return a.properties[field] - b.properties[field];
            }
            return b.properties[field] - a.properties[field];
        });
    }

    const features = useContext(DataContext)?.data?.features || [];
    const [earthquakes, setEarthquakes] = useState([]);

    useEffect(() => {
        const sortedEarthquakes = sortEarthquakes(features, sort.field, sort.direction);
        setEarthquakes(sortedEarthquakes);
    }, [features]);

    const sortHandler = (field, direction = 'asc') => {
        setSort((currentSort) => {
            if (currentSort.field === field) {
                direction = (currentSort.direction === 'asc') ? 'desc' : 'asc';
            }

            const sortedEarthquakes = sortEarthquakes(earthquakes, field, direction);
            setEarthquakes(sortedEarthquakes);

            return { field, direction };
        });
    };

    return (
        <React.Fragment>
            {earthquakes && earthquakes.length > 0 && (
                <div className="row g-0 mb-1 text-center border-bottom">
                    <div className="col-5" onClick={() => sortHandler('place')}>
                        Title
                        {sort.field === 'place' && sort.direction === 'asc' && <i className="fa-solid fa-caret-down ms-1"></i>}
                        {sort.field === 'place' && sort.direction === 'desc' && <i className="fa-solid fa-caret-up ms-1"></i>}
                    </div>
                    <div className="col-3" onClick={() => sortHandler('mag')}>
                        Magnitude
                        {sort.field === 'mag' && sort.direction === 'desc' && <i className="fa-solid fa-caret-down ms-1"></i>}
                        {sort.field === 'mag' && sort.direction === 'asc' && <i className="fa-solid fa-caret-up ms-1"></i>}
                    </div>
                    <div className="col-4" onClick={() => sortHandler('time')}>
                        Time
                        {sort.field === 'time' && sort.direction === 'desc' && <i className="fa-solid fa-caret-down ms-1"></i>}
                        {sort.field === 'time' && sort.direction === 'asc' && <i className="fa-solid fa-caret-up ms-1"></i>}
                    </div>
                </div>
            )}
            {earthquakes && earthquakes.length > 0 && earthquakes?.map((earthquake) => (
                <Earthquake
                    key={earthquake?.id}
                    id={earthquake?.id}
                    title={earthquake?.properties?.place}
                    magnitude={earthquake?.properties?.mag}
                    time={earthquake?.properties?.time}
                />
            ))}
            {earthquakes && earthquakes.length === 0 && <p className="text-center">No earthquakes</p>}
            {!earthquakes && <p className="text-center">Something went wrong!</p>}
        </React.Fragment>
    );
};

export default EarthquakeList;
