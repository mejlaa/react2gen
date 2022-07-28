import { intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

const CountDown = props => {
  const { toDate, fromDate } = props;
  //   const currentDate = new Date();
  //   const [state, setState] = useState(0);
  const [date, setDate] = useState(new Date());

  const duration = intervalToDuration({
    // start: currentDate,
    start: date,
    end: new Date(2024, 6, 2, 0, 0, 15),
  });

  //   useEffect(() => {
  //     setInterval(() => {
  //       setState(state + 1);
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  //   const interval = formatDuration(duration, { delimiter: ',' });

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {duration.years > 0 && <p>{duration.years}Y, </p>}
      {duration.months > 0 && <p>{duration.months}M, </p>}
      {duration.days > 0 && <p>{duration.days}d, </p>}
      {duration.hours > 0 && <p>{duration.hours}h,</p>}
      {duration.minutes > 0 && <p>{duration.minutes}m,</p>}
      {duration.seconds > 0 && <p>{duration.seconds}s</p>}
    </div>
  );
};

export default CountDown;
