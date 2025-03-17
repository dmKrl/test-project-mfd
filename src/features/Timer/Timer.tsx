import { useTimer } from 'react-timer-hook';
import { FC } from 'react';
import cls from './Timer.module.scss';

interface ITimer {
    expiryTimestamp: Date;
}

export const MyTimer: FC<ITimer> = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        // eslint-disable-next-line max-len
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });

    return (
        <div className={cls.timer}>
            <div className={cls.timerContent}>
                <span>
                    {hours}
                    h
                </span>

                <span>
                    {minutes}
                    m
                </span>

                <span>
                    {seconds}
                    s
                </span>
            </div>
        </div>
    );
};
