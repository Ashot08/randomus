import classes from './RandomNumber.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useEffect, useState } from 'react';

interface IRandomNumberProps {
  className?: string;
  number: number | string;
}

export const RandomNumber = ({className, number} : IRandomNumberProps) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {

      setVisible(true);

  }, []);
  return (
    <div className={classNames(classes.randomNumber, className, {[classes.visible]: visible})}>
      {number}
    </div>
  );
};

