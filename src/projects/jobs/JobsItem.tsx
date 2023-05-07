import React from 'react';
import {IJob} from "../../interface/IJob";

function JobsItem({job}: { job: IJob }) {
    return (
        <div className={'job'}>
            <h2 className="job__title">{job.title}</h2>
            <h3 className="job__company">{job.company}</h3>
            <div className="job__dates">{job.dates}</div>
            <div className="job__duties">{job.duties}</div>
        </div>
    );
}

export default JobsItem;