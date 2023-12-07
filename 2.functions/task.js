function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let summ = 0;
  let avg = 0;

  if (arr.length == 0) { //проверка наличия элементов в функции
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }

      if (arr[i] > max) {
        max = arr[i];
      }
  
      summ += arr[i];
    }
  
    avg = Number((summ / arr.length).toFixed(2));

    return { min: min, max: max, avg: avg};
  }
}

function summElementsWorker(...arr) {
  let summ = 0;

  if (arr.length == 0) { //проверка наличия элементов в функции
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      summ += arr[i];
    }
  
    return summ;
  }
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;

  if (arr.length == 0) { //проверка наличия элементов в функции
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
    }

    difference = max - min;

    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  if (arr.length == 0) { //проверка наличия элементов в функции
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 ) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    difference = sumEvenElement - sumOddElement;

    return difference;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;

  if (arr.length == 0) { //проверка наличия элементов в функции
    return 0;
  } else { //проверка наличия элементов в функции
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 ) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }

    average = sumEvenElement / countEvenElement;

    return average;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultOfFunc = 0;

  for (let subArray of arrOfArr) {
    resultOfFunc = func(...subArray);
    if (resultOfFunc > maxWorkerResult) {
      maxWorkerResult = resultOfFunc;
    }
  }
  
  return maxWorkerResult;
}
