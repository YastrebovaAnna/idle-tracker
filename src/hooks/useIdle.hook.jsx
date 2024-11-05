import {useCallback, useEffect, useState} from 'react';

const activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

const useIdle = (timeout = 3000) => {

    const [isIdle, setIsIdle] = useState(false);

    const resetIdleTimer = useCallback(() => {
        setIsIdle(false);
        clearTimeout(window.idleTimeout);
        window.idleTimeout = setTimeout(() => {
            setIsIdle(true);
        }, timeout);
    }, [timeout]);

    useEffect(() => {
        activityEvents.forEach((event) => window.addEventListener(event, resetIdleTimer));
        resetIdleTimer();

        return () => {
            activityEvents.forEach((event) => window.removeEventListener(event, resetIdleTimer));
            clearTimeout(window.idleTimeout);
        };
    }, [resetIdleTimer]);

    return isIdle;
};

export default useIdle;