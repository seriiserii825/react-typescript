import React, { useState } from "react";
import birthday from "../data/birthday";
import { IBirthday } from "../interface/IBirthday";
import RememberBirthdayList from "../components/projects/birthday/RememberBirthdayList";

function RememberBirthdayView() {
    const [people, setPeople] = useState<IBirthday[]>(birthday);
    return (
        <div className={"remember-birthday"}>
            <div className="remember-birthday__body">
                <h2 className={"remember-birthday__title"}>
                    {people.length} birthdays today
                </h2>
                <RememberBirthdayList people={people} />
                <button onClick={() => setPeople([])} className="btn">
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default RememberBirthdayView;
