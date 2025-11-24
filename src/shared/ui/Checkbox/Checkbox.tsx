import classes from './Checkbox.module.scss';
import { classNames } from 'shared/lib/classNames';
import { InputHTMLAttributes } from 'react';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  [key: string]: any;
}

export const Checkbox = ({className, ...otherProps} : ICheckboxProps) => {
  return (
    <div
      className={classNames(classes.neonCheckbox, className)}
    >
        <input type="checkbox" {...otherProps}/>
        <div className={classNames(classes.frame)}>
          <div className={classNames(classes.box)}>
            <div className={classNames(classes.checkContainer)} >
              <svg viewBox="0 0 24 24" className={classNames(classes.check)}>
                <path d="M3,12.5l7,7L21,5"></path>
              </svg>
            </div>
            <div className={classNames(classes.glow)} ></div>
            <div className={classNames(classes.borders)}>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <div className={classNames(classes.effects)}>
            <div className={classNames(classes.particles)}>
              <span></span><span></span><span></span><span></span> <span></span
            ><span></span><span></span><span></span> <span></span><span></span
            ><span></span><span></span>
            </div>
            <div className={classNames(classes.rings)}>
              <div className={classNames(classes.ring)}></div>
              <div className={classNames(classes.ring)}></div>
              <div className={classNames(classes.ring)} ></div>
            </div>
            <div className={classNames(classes.sparks)}>
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
    </div>
  );
};

