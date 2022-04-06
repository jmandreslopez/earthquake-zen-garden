import React, { useContext } from 'react';
import EarthquakeList from '../components/earthquake/EarthquakeList';
import Headline from '../components/UI/Headline';
import DataContext from '../store/data-context';

const Home = () => {
    const data = useContext(DataContext);

    return (
        <div className="container">
            <Headline title={data?.data?.metadata?.title} />
            <EarthquakeList />
        </div>
    );
};

export default Home;
