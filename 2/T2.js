let data = prompt('Введите дату формата 01.01.2022', '');

const getDayInfo = (data) => {
    let massive = data.split('.'); // Разбиваем на массив строк, определяем разрыв по точке
    // massive = [massive.shift(), massive.shift(), massive.join()]; // пусть будет на всякий 
    month = { "01": "Января", "02": "Февраля", "03": "Марта", "04": "Апреля", "05": "Мая", "06": "Июня", "07": "Июля", "08": "Августа", "09": "Сентября", "10": "Октября", "11": "Ноября", "12": "Декабря" }
    Month = month[massive[1]]; // Сохраняем название введенного месяца
    massive = { "day": massive[0], "month": parseInt(massive[1]), "year": massive[2] }; // преобразуем первоначальный массив, добавляя понятные ключи, вместо 0,1,2 будет теперь day, month, year
    kod_month = { 1: 1, 2: 4, 3: 4, 4: 0, 5: 2, 6: 5, 7: 0, 8: 3, 9: 6, 10: 1, 11: 4, 12: 6 }; // коды для месяцев, нужны для формулы вычисления номера дня недели
    let last_two_numbers_year = massive.year.split(''); // разбиваем год на 4 цифры
    last_two_numbers_year = [last_two_numbers_year.shift(), last_two_numbers_year.shift(), last_two_numbers_year.join('')]; // обьединяем 2 последнии цифры, чтобы использовать их в формуле
    let ltwny = last_two_numbers_year[2]; // сохраняем две последних числа ltwny, 2 - потому что в last_two_numbers_year хранится массив типа [X,X,XX] где XX - два последних числа в номере года
    switch (parseInt(last_two_numbers_year[0] + last_two_numbers_year[1])) { // просматриваем первые два числа в номере года, так как формулы для разных столетий отличаются
        case (21):
            kod_year = (4 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
        case (20):
            kod_year = (6 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
        case (19):
            kod_year = (0 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
        case (18):
            kod_year = (2 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
        case (17):
            kod_year = (4 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
        case (16):
            kod_year = (6 + parseInt(ltwny) + Math.trunc(parseInt(ltwny) / 4)) % 7;
            break;
    }
    let day_of_week = (parseInt(massive.day) + parseInt(kod_month[massive.month]) + kod_year) % 7; // номер дня недели высчитан, формула на 39 строке
    let day_list = { 0: "Суббота", 1: "Воскресенье", 2: "Понидельник", 3: "Вторник", 4: "Среда", 5: "Четверг", 6: "Пятница" }; // специальный массив, который преобразует полученное число day_of_week в название дня недели
    let text = day_list[day_of_week] + ", " + (Math.trunc(parseInt(massive.day) / 7) + 1) + " неделя " + Month + " " + massive.year + " года"; // Полученная строка формата - Суббота, 1 неделя Января 2022 года
    return text; // возвращение значение text и остановка функции
}
console.log(getDayInfo(data)); // вывод результата на консоль, можно было присвоить возвращенное значение, например переменной result и вывести ее
//день недели (понидельник, вторник и тп) = (день + код месяца + код года) % 7
//код года = (6 + последние две цифры года + последние две цифры года / 4) % 7
//Старт отсчёта — выходные, то есть: 0 — суббота, 1 — воскресенье и так далее

//Запускал код через консоль в браузере edge