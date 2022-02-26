import { useEffect, useState } from 'react';
import './styles.css';

export default function Offer(props){
    const [remainingTime, setRemainingTime] = useState('calculating...')
    let startTimeMS = 0;


    useEffect(() => {

        const {days, seconds, minutes, hours} = props.offerData.expires;
        startTimeMS = new Date().getTime();



        let timerStep =( (days*24*60*60) + seconds + (minutes *60 ) +  (hours*60*60)) * 1000
        console.log(timerStep)

        // const timerId = setTimeout()
        let intervalTimerId = setInterval(() => {
            setRemainingTime(() => {
              const milliseconds = timerStep - (new Date().getTime() - startTimeMS);
              let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
              let hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              let mins = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
              let secs = Math.floor((milliseconds % (1000 * 60)) / 1000);
            //   return seconds == 60
            //     ? minutes + 1 + ':00'
            //     : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
            setRemainingTime({days, hours:("0" + hours).slice(-2), mins:("0" + mins).slice(-2), secs:("0" + secs).slice(-2) })
            // return days + ':' + ("0" + hours).slice(-2) + ':' + ("0" + mins).slice(-2) + ':' + ("0" + secs).slice(-2) 
        });
          }, 1000);
      
      
          let timerId = setTimeout(() => {
            clearTimeout(timerId);
            clearInterval(intervalTimerId);
          }, timerStep);

        return () => {
            clearTimeout(timerId);
            clearInterval(intervalTimerId);
        }

    }, [])

    return (
        <>
            <div className='offer-card'>
                <h1>
                    {props.offerData.name}
                </h1>
                <p>
                    {props.offerData.body}


                </p>
                <div className='flex countdown-wrapper'>
                    <span className='time-element'>
                        {remainingTime?.days}
                        <br/>
                        days
                    </span>
                    <span className='time-element'>
                        {remainingTime?.hours}
                        <br/>
                        hours
                    </span>
                    <span className='time-element'>
                        {remainingTime?.mins}
                        <br/>
                        mins
                    </span>
                    <span className='time-element'>
                    {remainingTime?.secs}
                    <br/>
                    seconds
                    </span>
                </div>
                {/* <span>{remainingTime}</span> */}


            </div>
        </>
    )


}