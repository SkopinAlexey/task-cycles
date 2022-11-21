/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;
    for (; start <= end; start++) {
        if (start % 2 == 0) {
            sum += start;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    while (a > 0.1) {
        a /= 2;
    }
    return a;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 0,
        new_message = '';

    if (message.length < 3) {
        return message;
    }

    do {
        new_message += message[i];
        new_message += message[i + 1];
        new_message += '_';
        i++;
    } while (i * 3 < message.length);
    {
        new_message += message[i];
        new_message += message[i + 1];
        new_message += '_';
        i++;
    }
    new_message += message.substring(i + 1, message.length);

    return new_message;
}
