export interface RandomNumberGeneratorFormData {
  from: number;
  to: number;
  numbersCount: number;
  noReplays: boolean;
  sort: boolean;
  numbers?: number[];
}

export const generateRandomNumbers = (formData: RandomNumberGeneratorFormData) => {
  if(formData.from > formData.to) {
    const temp = formData.from;
    formData.from = formData.to;
    formData.to = temp;
  }
  if (formData.noReplays) {
    if (formData.numbersCount > formData.to) {
      formData.numbersCount = formData.to;
    }
    if(Array.isArray(formData.numbers)) {
      if (formData.numbers.length >= formData.to) {
        return [];
      }
    }
  }


  const newNumbers: number[] = [];
  for (let i = 0; i < formData.numbersCount; i++ ) {
    let success = false;
    let candidate = getRandomIntInclusive(formData.from, formData.to);
    let whileCounter = 0;
    while (!success) {
      whileCounter += 1;
      if(whileCounter > 1100000) {
        console.error('STACK BREAK')
        break;
      }
      candidate = getRandomIntInclusive(formData.from, formData.to);
      success = true;
      if (formData.noReplays === true) {
        if(newNumbers.includes(candidate)) {
          success = false;
        }
        if (Array.isArray(formData.numbers) && formData.numbers.includes(candidate)) {
          success = false;
        }
      }
    }
    if (success) {
      newNumbers.push(candidate);
    }

  }
  return formData.sort ? newNumbers.sort((a, b) => a - b) : newNumbers;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if(min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
