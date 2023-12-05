import { useEffect, useState } from "react";
import '../styles/analogClock.css'

function AnalogClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();


    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

    const secondHandStyle = {
        transform: `rotate(${secondDegrees-15}deg)`,
    };

    const minuteHandStyle = {
        transform: `rotate(${minuteDegrees-15}deg)`,
    };

    const hourHandStyle = {
        transform: `rotate(${hourDegrees-15}deg)`,
    };
    return (
        <div className="analog-clock">
            <h1>Analog Clock</h1>
            <div className="clock-div">
                <div className="clock">
                    <div className="hand second-hand" style={secondHandStyle}></div>
                    <div className="hand minute-hand" style={minuteHandStyle}></div>
                    <div className="hand hour-hand" style={hourHandStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default AnalogClock;
