import React, {useState} from 'react';
import JobsMenu from "../components/projects/jobs/JobsMenu";
import {IJob} from "../interface/IJob";
import jobs_list from "../data/jobs";

function JobsView(props) {
    const [jobs, setJobs] = useState<IJob[]>(jobs_list);
    return (
        <div className={'jobs-view'}>
            <h1 className="jobs-view__title">Jobs</h1>
            {jobs.length === 0 ? (
                <h3>no jobs</h3>
            ) : (
                <JobsMenu jobs={jobs}/>
            )}
        </div>
    );
}

export default JobsView;