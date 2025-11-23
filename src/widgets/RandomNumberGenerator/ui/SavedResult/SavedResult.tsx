import classes from './SavedResult.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';

interface ISavedResultProps {
  className?: string;
  timestamp: number;
  numbers: number[];
}

const timestampToDate = (timestamp: number) => {
  const dateObject = new Date(timestamp);
  const formattedDate = dateObject.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    // timeZoneName: 'short'
  });
  return formattedDate;
}

export const SavedResult = ({className, timestamp, numbers} : ISavedResultProps) => {
  const [openResult, setOpenResult] = useState(false)
  return (
    <div className={classNames(classes.savedResult, className)}>
      <div>
        {timestampToDate(timestamp)}
      </div>
      {openResult && <div>
        {String(numbers)}
      </div>}
    </div>
  );
};

