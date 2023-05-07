import React from 'react';
import {IJob} from "../../../interface/IJob";
import classNames from "classnames";

function JobsMenu({jobs, value, setValue}: { jobs: IJob[] }) {
    return (
        <ul className={'jobs-menu'}>
            {jobs.map((job: IJob, index) => {
                return (
                    <li
                        key={job.id}
                        className={classNames({'jobs-menu__item': true, "active": value === index})}
                        onClick={() => setValue(index)}
                    >{job.company}</li>
                )
            })}
        </ul>
    );
}

export default JobsMenu;