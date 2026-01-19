import { Slate } from './NumberSlates'
import React from "react";


export const SecondsCounter = () => {
    const [seconds, setSeconds] = React.useState(0);
    const ones = seconds % 10;
    const tens = Math.floor(seconds / 10) % 10;
    const hundreds = Math.floor(seconds / 100) % 10;
    const thousands = Math.floor(seconds / 1000) % 10;
    const tenThousands = Math.floor(seconds / 10000) % 10;
    const millions = Math.floor(seconds / 1000000) % 10;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter">
            <div className="slate" id='clockIco'>
                <img src="src/img/clock.png"/>
            </div>
            <Slate seconds={millions} />
            <Slate seconds={tenThousands} />
            <Slate seconds={thousands} />
            <Slate seconds={hundreds} />
            <Slate seconds={tens} />
            <Slate seconds={ones} />
        </div>
    );
}
