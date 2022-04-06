import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Details from './pages/Details';
import Home from './pages/Home';
import Profile from './pages/Profile';
import DataContext from './store/data-context';

const App = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data.json');
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="details/:earthquakeId" element={<Details/>} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </Layout>
        </DataContext.Provider>
    );
};

export default App;
