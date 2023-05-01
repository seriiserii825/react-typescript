import React, {useEffect, useState} from 'react';
import {ITour} from "../interface/ITour";
import axiosInstance from "../helpers/axios-instance";
import Loading from "../components/globals/Loading";

function OurToursView() {
    const [loading, setLoading] = useState<boolean>(true);
    const [tours, setTours] = useState<ITour[]>([]);

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

    return (
        <div style={{background: '#33CCCC'}} className={'our-tours'}>
            {loading ? <Loading/> : (
                <div className={'our-tours__body'}>
                    {tours.length > 0 ? tours.map((tour: ITour) => (
                        <article className={'our-tours__item'} key={tour.id}>
                            <div className={'our-tours__img'}>
                                <img src={tour.image} alt=""/>
                            </div>
                            <header className="our-tours__header">
                                <h2 className="our-tours__title">{tour.name}</h2>
                                <div className="our-tours__price">{tour.price}</div>
                            </header>
                            <div className="our-tours__content">{tour.info}</div>
                            <button className="btn">Not interested</button>
                        </article>
                    )) : (<h2>No tours available...</h2>)
                    }
                </div>
            )}
        </div>
    );
}

export default OurToursView;