import React from 'react';
import {IBirthday} from "../../../interface/IBirthday";

function RememberBirthdayList({people: people}: { people: IBirthday[] }) {
    return (
        <ul className={'remember-birthday__list'}>
            {people.map((person) => {
                return (
                    <article key={person.id} className="remember-birthday__item">
                        <div className="remember-birthday__wrap">
                            <div className="remember-birthday__img">
                                <img src={person.image} alt=""/>
                            </div>
                            <div className="remember-birthday__info">
                                <h3 className="remember-birthday__name">{person.name}</h3>
                                <p className="remember-birthday__age">{person.age} years</p>
                            </div>
                        </div>
                    </article>
                )
            })}
        </ul>
    );
}

export default RememberBirthdayList;