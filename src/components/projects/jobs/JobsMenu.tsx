import React from 'react';
import {IJob} from "../../../interface/IJob";

function JobsMenu({jobs}: { jobs: IJob[] }) {
    return (
        <ul className={'jobs-menu'}>
            {jobs.map((job: IJob) => {
                return (
                    <li key={job.id} className={'jobs-menu__item'}>{job.company}</li>
                )
            })}
        </ul>
    );
}

export default JobsMenu;