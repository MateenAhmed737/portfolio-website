import React from 'react';
import { useParams } from 'react-router-dom';
import { Calculator, DrumMachine, MarkdownPreviewer, Quotes, PomodoroClock, PlandromeChecker } from './Projects';
import { PageNotFound } from '../pages';

const Project = () => {
    const { id } = useParams();
    switch (id) {
        case "quotes-generator": return <Quotes />
            break;
        case "markdown-previewer": return <MarkdownPreviewer />
            break;
        case "drum-machine": return <DrumMachine />
            break;
        case "calculator": return <Calculator />
            break;
        case "pomodoro": return <PomodoroClock />
            break;
        case "plandrome": return <PlandromeChecker />
            break;
        default: return <PageNotFound />
            break;
    }
}

export default Project;