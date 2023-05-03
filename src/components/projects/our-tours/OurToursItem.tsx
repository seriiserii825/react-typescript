import React, {useState} from 'react';
import {ITour} from "../../../interface/ITour";

function OurToursItem({tour, removeTour}: { tour: ITour }) {
    const [read_more, setReadMore] = useState<boolean>(true);
    return (
        <article className={'our-tours__item'}>
            <div className={'our-tours__img'}>
                <img src={tour.image} alt=""/>
            </div>
            <header className="our-tours__header">
                <h2 className="our-tours__title">{tour.name}</h2>
                <div className="our-tours__price">${tour.price}</div>
            </header>
            <div className="our-tours__content">
                {read_more ? tour.info.substring(0, 200) : tour.info}
                <button className={'our-tours__read-more'} onClick={() => setReadMore(!read_more)}>{read_more ? 'Read' +
                    ' More' : 'Show' +
                    ' Less'}</button>
            </div>
            <button onClick={() => removeTour(tour.id)} className="btn">Not interested</button>
        </article>
    );
}

export default OurToursItem;