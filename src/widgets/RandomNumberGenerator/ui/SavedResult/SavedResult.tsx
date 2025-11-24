import classes from './SavedResult.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { RandomusResult } from 'widgets/RandomNumberGenerator/lib/NumbersMemory';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ISavedResultProps {
  className?: string;
  timestamp: number;
  numbers: number[];
  onDelete: (result: RandomusResult) => void;
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

export const SavedResult = ({className, timestamp, numbers, onDelete} : ISavedResultProps) => {
  const [openResult, setOpenResult] = useState(false);
  const handleDelete = () => {
    onDelete({timestamp, numbers});
  }
  const handleOpen = () => {
    setOpenResult(!openResult);
  }
  return (
    <div className={classNames(classes.savedResult, className)}>
      <div>
        {timestampToDate(timestamp)}
      </div>
      <div className={classNames(classes.controls)}>
        <Button onClick={handleOpen} className={classNames(classes.openButton)} theme={ButtonTheme.CLEAR}>
          {openResult ? 'Скрыть' : 'Посмотреть'}
        </Button>
        <Button onClick={handleDelete} className={classNames(classes.deleteButton)} theme={ButtonTheme.CLEAR}>Удалить</Button>
      </div>
      {openResult && <div className={classNames(classes.numbers)}>
        {numbers.map((n) => <span className={classNames(classes.number)}>{n}</span>)}
      </div>}
    </div>
  );
};

