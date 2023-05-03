import React, {useEffect, useState} from 'react';
import {ITour} from "../interface/ITour";
import axiosInstance from "../helpers/axios-instance";
import Loading from "../components/globals/Loading";
import OurToursItem from "../components/projects/our-tours/OurToursItem";

function OurToursView() {
    const [loading, setLoading] = useState<boolean>(true);
    const [tours, setTours] = useState<ITour[]>([]);

    function removeTour(id: number) {
        const new_tours = tours.filter(tour => tour.id !== id);
        setTours(new_tours);
    }

    async function getTours() {
        try {
            const response = await axiosInstance('/tours');
            setTours(response.data.data);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        } catch (e) {
            console.log(e, 'e')
            setLoading(false);
        }
    }

    useEffect(() => {
        getTours();
    }, [])

    if (loading) {
        return (
            <div style={{background: '#33CCCC'}} className={'our-tours'}>
                <Loading/>
            </div>
        )
    } else if (tours.length === 0) {
        return (
            <div style={{background: '#33CCCC'}} className={'our-tours'}>
                <div className="our-tours__body">
                    <button onClick={() => getTours()} className="btn">Refresh</button>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{background: '#33CCCC'}} className={'our-tours'}>
                <div className={'our-tours__body'}>
                    {tours.length > 0 ? tours.map((tour: ITour) => (
                        <OurToursItem tour={tour} key={tour.id} removeTour={removeTour}/>
                    )) : (<h2>No tours available...</h2>)
                    }
                </div>
            </div>
        )
    }
}

export default OurToursView;