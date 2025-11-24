import classes from './RandomNumberGenerator.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { generateRandomNumbers } from 'widgets/RandomNumberGenerator/lib/generateRandomNumbers';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { RandomNumber } from './RandomNumber';
import NumbersMemory, { RandomusResult } from 'widgets/RandomNumberGenerator/lib/NumbersMemory';
import { SavedResult } from 'widgets/RandomNumberGenerator/ui/SavedResult/SavedResult';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

interface IRandomNumberGeneratorProps {
  className?: string;
}

enum Mode {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

const MAX_FROM_TO = 1000000;
const MIN_FROM_TO = 1;
const MAX_NUMBERS_COUNT = 1000;

export const RandomNumberGenerator = ({className}: IRandomNumberGeneratorProps) => {
  const {t} = useTranslation();
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(100);
  const [numbersCount, setNumbersCount] = useState(1);
  const [noReplays, setNoReplays] = useState(true);
  const [sort, setSort] = useState(false);
  const [autoClean, setAutoClean] = useState(false);
  const [saveEachStep, setSaveEachStep] = useState(true);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [mode, setMode] = useState<Mode.LOADING | Mode.LOADED>(Mode.LOADED);
  const [savedResults, setSavedResults] = useState<RandomusResult[]>([]);

  useEffect(() => {
    setSavedResults(NumbersMemory.getResults());
  }, [savedResults]);

  const handleFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleNumber(event, MAX_FROM_TO, MIN_FROM_TO, setFrom);
  };
  const handleTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleNumber(event, MAX_FROM_TO, MIN_FROM_TO, setTo);
  };
  const handleNumbersCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleNumber(event, MAX_NUMBERS_COUNT, MIN_FROM_TO, setNumbersCount);
  };
  const handleReplays = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoReplays(event.target.checked);
  }
  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.checked);
  }
  const handleAutoClean = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoClean(event.target.checked);
  }
  const handleSaveEachStep = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSaveEachStep(event.target.checked);
  }

  const handleClear = () => {
    setNumbers([]);
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setMode(Mode.LOADING);
    const result = generateRandomNumbers({
      from,
      to,
      numbersCount,
      noReplays,
      sort,
      numbers,
    });

    setTimeout(function () {
      if (autoClean) {
        setNumbers(result);
      } else {
        if (sort) {
          setNumbers([
              ...numbers,
              ...result
            ].sort((a, b) => a - b),
          );
        } else {
          setNumbers([
            ...numbers,
            ...result]
          );
        }
      }
      if(saveEachStep) {
        setSavedResults([]);
          const timestamp = Date.now();
          NumbersMemory.addResult({
            timestamp,
            numbers: [
              ...numbers,
              ...result],
          });
      }
      setMode(Mode.LOADED);
      console.log(`from ${from} to ${to} numbersCount ${numbersCount} replays ${noReplays} sort ${sort}`, result);
    }, 1200);
  }
  const handleNumber = (event: React.ChangeEvent<HTMLInputElement>, max: number, min: number, callback: Dispatch<SetStateAction<number>>) => {
    const value = Number.isNaN(Number(event.target.value)) ? MIN_FROM_TO : Number(event.target.value);
    switch (true) {
      case value > max:
        callback(max);
        break;
      case value < min:
        callback(min);
        break;
      default:
        callback(value);
    }
  }

  const handleSave = () => {
    setMode(Mode.LOADING);
    setSavedResults([]);
    setTimeout(() => {
      const timestamp = Date.now();
      NumbersMemory.addResult({
        timestamp, numbers,
      });
      setMode(Mode.LOADED);
    }, 1000)
  }

  const handleDelete = (result: RandomusResult) => {
    setSavedResults([]);
    NumbersMemory.deleteResult(result);
  }

  return (
    <div className={classNames(classes.randomNumberGenerator, className)}>
      <div className={classNames(classes.sidebar)}>
        <form className={classNames(classes.form)} onSubmit={handleSubmit}>
          <div className={classNames(classes.formRow)}>
            <div className={classNames(classes.formRowTitle)}>Диапазон:</div>
            <label className={classNames(classes.inputLabel)}>
              От
              <input disabled={numbers.length > 0 && !autoClean} className={classNames(classes.numberInput)}
                     min={MIN_FROM_TO} max={MAX_FROM_TO} type="number" name={'from'} value={from}
                     onChange={handleFrom}/>
            </label>
            <label className={classNames(classes.inputLabel)}>
              До
              <input disabled={numbers.length > 0 && !autoClean} className={classNames(classes.numberInput)}
                     min={MIN_FROM_TO} max={MAX_FROM_TO} type="number" name={'to'} value={to} onChange={handleTo}/>
            </label>
          </div>
          <div className={classNames(classes.formRow)}>
            <div className={classNames(classes.formRowTitle)}>Количество чисел:</div>
            <label className={classNames(classes.inputLabel)}>
              за одну генерацию
              <input disabled={numbers.length > 0 && !autoClean} className={classNames(classes.numberInput)}
                     min={MIN_FROM_TO} max={MAX_FROM_TO} type="number"
                     name={'numbersCount'} value={numbersCount}
                     onChange={handleNumbersCount}/>
            </label>
          </div>

            <div className={'space-1'}></div>
            <div className={classNames(classes.formBlock)}>
              <div className={classNames(classes.formRow)}>
                <label className={classNames(classes.inputLabel, classes.checkboxLabel)}>
                  <span className={classNames(classes.checkboxLabelTitle)}>Без повторов</span>
                  <Checkbox type={'checkbox'} name={'replays'} checked={noReplays} onChange={handleReplays}/>
                </label>
              </div>
              <div className={classNames(classes.formRow)}>
                <label className={classNames(classes.inputLabel, classes.checkboxLabel)}>
                  <span className={classNames(classes.checkboxLabelTitle)}>Сортировать по порядку</span>
                  <Checkbox name={'sort'} checked={sort} onChange={handleSort}/>
                </label>
              </div>
              <div className={classNames(classes.formRow)}>
                <label className={classNames(classes.inputLabel, classes.checkboxLabel)}>
                  <span className={classNames(classes.checkboxLabelTitle)}>Очищать после каждой генерации</span>
                  <Checkbox name={'autoClean'} checked={autoClean} onChange={handleAutoClean}/>
                </label>
              </div>

              <div className={classNames(classes.formRow)}>
                <label className={classNames(classes.inputLabel, classes.checkboxLabel)}>
                  <span className={classNames(classes.checkboxLabelTitle)}>Сохранять каждый шаг</span>
                  <Checkbox name={'saveEachStep'} checked={saveEachStep} onChange={handleSaveEachStep}/>
                </label>
              </div>

              <div className={classNames(classes.formRow)}>
                <Button disabled={mode === Mode.LOADING}>Сгенерировать</Button>
              </div>
            </div>
        </form>
        {
          (savedResults.length > 0) && <div className={classNames(classes.savedResults)}>
          <div className={classNames(classes.savedResultsTitle)}>Сохраненные результаты:</div>
            {savedResults.sort((a, b) => b.timestamp - a.timestamp).map((savedResult, index) => {
              return <SavedResult
                key={`${savedResult.timestamp}-${index}`}
                timestamp={savedResult.timestamp}
                numbers={savedResult.numbers}
                onDelete={handleDelete}
              />
            })}
            </div>
        }
      </div>
      <div className={classNames(classes.resultsWrapper)}>
        <div className={classNames(classes.results)}>
          {
            <div className={classNames(classes.spinnerWrapper, {[classes.visible]: mode === Mode.LOADING})}>
              <Spinner/>
            </div>
          }
          {
            (numbers.length > 0) ? <div>
                <div className={classNames(classes.numbers)}>
                  {numbers.map((number, index) => <RandomNumber key={`${number}-${index}`} number={number}/>)}
                </div>
              </div>
              :
              <div className={classNames(classes.infoText)}>
                {t('Нажмите "Сгенерировать", чтобы получить результат.')}
              </div>
          }
        </div>

        {
          (numbers.length > 0) && <div className={classNames(classes.resultsControls)}>
                <Button onClick={handleClear}>Очистить</Button>
              {!saveEachStep && <Button onClick={handleSave}>Сохранить результат</Button>}
            </div>
        }

      </div>
    </div>
  );
};
