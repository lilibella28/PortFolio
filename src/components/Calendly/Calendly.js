import { InlineWidget } from 'react-calendly';

function MyCalendly(){

    return(
        <div>
            <h1 className="project-heading">
         <strong className="purple">Book a meeting with me</strong>
        </h1>

           <InlineWidget url="https://calendly.com/lilimontano58/30min"/>
        </div>
    )
}

export default MyCalendly