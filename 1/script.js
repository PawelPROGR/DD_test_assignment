const introduction = () => {
    $('#div3').html(`<p><i><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></i> является базовым языком программирования для браузеров. Он полностью совместим с операционными системами <b>Windows, Linux, Mac OS</b>, а также всеми популярными мобильными платформами. С помощью JavaScript и Node.JS можно создавать веб-приложения, мобильные кроссплатформенные приложение, а также десктопные кроссплатформенные приложения. JavaScript является универсальным языком программирование, который совмещает в себя множество библиотек Node.JS, позволяя создавать диаграммы, формы, разметки страниц, обрабатывать события, анализировать Big Data, взаимодействовать с клиент-серверной архитектурой и многое другое.

    <div class="slideshowСontainer">

        <div class="slide">
            <div class="numbertext">1 / 3</div>
            <img src='https://i11.fotocdn.net/s114/2b9df7b83c8e7e4c/public_pin_l/2578459152.jpg' class="Primer1IMG">
            <div class="text">Лучший язык програмирования</div>
        </div>

        <div class="slide">
            <div class="numbertext">2 / 3</div>
            <img src='https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png' class="Primer1IMG">
            <div class="text">Самые смешные мемы</div>
        </div>

        <div class="slide">
            <div class="numbertext">3 / 3</div>
            <img src='https://cdn.hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif' class="Primer1IMG">
            <div class="text">Лучшие библеотеки</div>
        </div>

    </div>

    <script>
    let Index = 0;
    showSlides();
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        Index++;
        Index > slides.length ? Index = 1 : null;
        slides[Index - 1].style.display = "block";
        setTimeout(showSlides, 1700);
    }
    </script>

    </p><p>Достоинства:
    </p><ol class='olStyleLeft'>
    <li> Универсальность языка, разные задачи
    </li><li> Поддержка скриптов всеми популярными браузерами; полная интеграция с вёрсткой страниц (HTML+CSS) и многими другими аналогами, и серверной частью (backend).
    </li><li> Мощная инфраструктура (экосистема)
    </li><li> Удобство пользовательских интерфейсов
    </li><li> Язык высокого уровня
    </li><li> Кроссплатформенный язык программирования 
    </li>
    </ol><p>Недостатки:
    </p><ol class='olStyleLeft'>
    <li> Отсутствует типизация данных
    </li><li> Не привычная для многих программистов объектная модель. Классы и наследование классов присутствует, но оно сильно отличается от привычной многим реализаций в языках программирования C++/C#/Java.
    </li><li> Множество мелких раздражающих ошибок на каждом этапе работы.
    </li><li> Поддержка браузера: JavaScript иногда интерпретируется по-разному разными браузерами. Различные механизмы компоновки могут отображать JavaScript по-разному, что приводит к несогласованности с точки зрения функциональности и интерфейса. Большая часть JavaScript зависит от манипуляции элементами DOM браузеров. И разные браузеры предоставляют разные типы доступа к объектам, в частности Internet Explorer.
    </li>
    </ol>
    <p></p>`);
    $('#div2').html(`JavaScript`);
    $('#div1').html(`Введение`);
}

window.onload = function() {
    introduction()
};

const NodeJS = () => {
    $('#div3').html(`
    <p><a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"><i>NodeJS</i></a> – это JavaScript-фреймворк, написанный на движке V8 Engine от Google. Он создавался для одновременной обработки нескольких запросов. С поставленной задачей NodeJS справился на ура, благодаря чему быстро стал одним из самых популярных фреймворков для разработки сайтов. К тому же, разработчики могут тратить меньше времени на разработку, благодаря использованию встроенного менеджера пакетов NPM, который позволяет добавлять другие JavaScript фреймворки и библиотеки.</p>
    <p>Рассмотрим основные особенности Node.js.</p>
    <img src='resources/NodeJS.jpg' class="Primer1IMG">
    <ul class='olStyleLeft'>
    <li>Скорость</li>
    <p>Одной из основных привлекательных особенностей Node.js является скорость. JavaScript-код, выполняемый в среде Node.js, может быть в два раза быстрее, чем код, написанный на компилируемых языках, вроде C или Java, и на порядки быстрее интерпретируемых языков наподобие Python или Ruby. Причиной подобного является неблокирующая архитектура платформы, а конкретные результаты зависят от используемых тестов производительности, но, в целом, Node.js — это очень быстрая платформа.</p>
    <li>Простота</li>
    <p>Платформа Node.js проста в освоении и использовании. На самом деле, она прямо-таки очень проста, особенно это заметно в сравнении с некоторыми другими серверными платформами.</p>
    <li>JavaScript</li>
    <p>В среде Node.js выполняется код, написанный на JavaScript. Это означает, что миллионы фронтенд-разработчиков, которые уже пользуются JavaScript в браузере, могут писать и серверный, и клиентский код на одном и том же языке программирования без необходимости изучать совершенно новый инструмент для перехода к серверной разработке.</p>
    <p>В браузере и на сервере используются одинаковые концепции языка. Кроме того, в Node.js можно оперативно переходить на использование новых стандартов ECMAScript по мере их реализации на платформе. Для этого не нужно ждать до тех пор, пока пользователи обновят браузеры, так как Node.js — это серверная среда, которую полностью контролирует разработчик. В результате новые возможности языка оказываются доступными при установке поддерживающей их версии Node.js.</p>
    <li>Движок V8</li>
    <p>В основе Node.js, помимо других решений, лежит опенсорсный JavaScript-движок V8 от Google, применяемый в браузере Google Chrome и в других браузерах. Это означает, что Node.js пользуется наработками тысяч инженеров, которые сделали среду выполнения JavaScript Chrome невероятно быстрой и продолжают работать в направлении совершенствования V8.</p>
    <li>Асинхронность</li>
    <p>В традиционных языках программирования (C, Java, Python, PHP) все инструкции, по умолчанию, являются блокирующими, если только разработчик явным образом не позаботится об асинхронном выполнении кода. В результате если, например, в такой среде, произвести сетевой запрос для загрузки некоего JSON-кода, выполнение потока, из которого сделан запрос, будет приостановлено до тех пор, пока не завершится получение и обработка ответа.</p>
    <p>JavaScript значительно упрощает написание асинхронного и неблокирующего кода с использованием единственного потока, функций обратного вызова (коллбэков) и подхода к разработке, основанной на событиях. Каждый раз, когда нам нужно выполнить тяжёлую операцию, мы передаём соответствующему механизму коллбэк, который будет вызван сразу после завершения этой операции. В результате, для того чтобы программа продолжила работу, ждать результатов выполнения подобных операций не нужно.</p>
    <p>Подобный механизм возник в браузерах. Мы не можем позволить себе ждать, скажем, окончания выполнения AJAX-запроса, не имея при этом возможности реагировать на действия пользователя, например, на щелчки по кнопкам. Для того чтобы пользователям было удобно работать с веб-страницами, всё, и загрузка данных из сети, и обработка нажатия на кнопки, должно происходить одновременно, в режиме реального времени.</p>
    <p>Если вы создавали когда-нибудь обработчик события нажатия на кнопку, то вы уже пользовались методиками асинхронного программирования.</p>
    <p>Асинхронные механизмы позволяют единственному Node.js-серверу одновременно обрабатывать тысячи подключений, не нагружая при этом программиста задачами по управлению потоками и по организации параллельного выполнения кода. Подобные вещи часто являются источниками ошибок.</p>
    <p>Node.js предоставляет разработчику неблокирующие базовые механизмы ввода вывода, и, в целом, библиотеки, использующиеся в среде Node.js, написаны с использованием неблокирующих парадигм. Это делает блокирующее поведение кода скорее исключением, чем нормой.</p>
    <p>Когда Node.js нужно выполнить операцию ввода-вывода, вроде загрузки данных из сети, доступа к базе данных или к файловой системе, вместо того, чтобы заблокировать ожиданием результатов такой операции главный поток, Node.js инициирует её выполнение и продолжает заниматься другими делами до тех пор, пока результаты выполнения этой операции не будут получены.</p>
    <li>Библиотеки</li>
    <p>Благодаря простоте и удобству работы с менеджером пакетов для Node.js, который называется npm, экосистема Node.js прямо-таки процветает. Сейчас в реестре npm имеется более полумиллиона опенсорсных пакетов, которые может свободно использовать любой Node.js-разработчик.</p>
    <p>Рассмотрев некоторые основные особенности платформы Node.js, опробуем её в действии. Начнём с установки.</p>
    </ul>
    `);
    $('#div2').html(``);
    $('#div1').html(`Node.JS`);
}

const ReactJS = () => {
    $('#div3').html(`
    <p><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank"><i>React</i></a> — JavaScript-библиотека для работы с пользовательскими интерфейсами (UI), которую создали разработчики Facebook. Библиотеку начали использовать на сайте этой социальной сети в 2011 году. А в 2013 году Facebook открыл исходный код React.</p>
    <p>С помощью React разработчики создают веб-приложения, которые изменяют отображение без перезагрузки страницы. Благодаря этому приложения быстро реагируют на действия пользователя, например, заполнение форм, применение фильтров, добавление товаров в корзину и так далее.</p>
    <p>React применяют для отрисовки компонентов пользовательского интерфейса. Также библиотека может полностью управлять фронтендом. В этом случае React используют с библиотеками для управления состоянием и роутинга, например, Redux и React Router.</p>
    <h2>Ключевые особенности React: декларативность, универсальность, компонентный подход, виртуальный DOM, JSX</h2>
    <p>Одна из ключевых особенностей React — универсальность. Эту библиотеку можно использовать на сервере и на мобильных платформах с помощью React Native. Это принцип Learn Once, Write Anywhere или «Научитесь один раз, пишите где угодно».</p>
    <p>Ещё одна важная особенность библиотеки — декларативность. С помощью React разработчик описывает, как компоненты интерфейса выглядят в разных состояниях. Декларативный подход сокращает код и делает его понятным.</p>
    <p>React основан на компонентах, это ещё одна ключевая особенность библиотеки. Каждый компонент возвращает часть пользовательского интерфейса со своим состоянием. Объединяя компоненты, программист создаёт завершённый интерфейс веб-приложения.</p>
    <p>Важная особенность React — использование <b>JSX</b>. Это расширение синтаксиса JavaScript, которое удобно использовать для описания интерфейса. JSX похож на HTML, тем не менее это всё-таки JavaScript. Пример JSX можно увидеть ниже</p>
    <p>JSX позволяет писать JavaScript-код с помощью готовых компонентов, которые практически полностью повторяют HTML. Это упрощает разработку.</p>
    <p>К важным особенностям React относится использование виртуального DOM (Virtual DOM). Виртуальный DOM — объект, в котором хранится информация о состоянии интерфейса. При изменении состояния, например, после отправки формы или нажатия кнопки, React рассчитывает разницу между старым и новым состоянием. После этого библиотека отрисовывает новое состояние. Использование виртуального DOM позволяет библиотеке эффективно обновлять реальный DOM.</p>
    <p>Чтобы подробнее узнать о работе с DOM и Virtual DOM, а также о принципах программирования пользовательских интерфейсов, посмотрите <a href="https://www.youtube.com/watch?v=DCeNCr2tKOI&feature=youtu.be&ab_channel=%D0%A5%D0%B5%D0%BA%D1%81%D0%BB%D0%B5%D1%82">запись доклада Кирилла Мокевнина на конференции Fronthub 2015</a></p>
    <p>Промежуточный итог: React — популярная библиотека для работы с UI. К её основным особенностям относится декларативность, компонентный подход, универсальность, использование виртуального DOM и JSX.</p>
    `);
    $('#div2').html(``);
    $('#div1').html(`React.JS`);
}

$("#scrollToTop").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
    return false;
});