import { useEffect, useState } from "react";
import '../styles/digitalClock.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    const formattedTime = time.toLocaleTimeString();
    return (
        <div className="digital-clock">
            <h1>Digital Clock</h1>
            <div className="d-clock">
                <h1 className="time text-center">{formattedTime}</h1>
            </div>
        </div>
    );
}

export default DigitalClock;
