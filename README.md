# Task-with-tables
Some practice with cookie, xmlhttprequest, ifame and tables 
Над прилагаемым файлом site.html необходимо выполнить следующие действия:
1.Создать кнопку, по нажатию на которую, появится копия исходной таблицы, но с порядком полей: 1, 3, 2. Применить для новой таблицы стили t2

2.Создать кнопку, по нажатию на которую, появится копия исходной таблицы, но с дополнительным полем  4, 
в котором будет сумма полей 2 и 3. Применить для новой таблицы стили t2

3.Создать кнопку, по нажатию на которую, сохранится в cookie ключ bbb со значением, равным 43
при последующем обновлении html  в исходной таблице и в таблицах из пунктов 1, 2, 5 и 6 все числа должны быть уменьшены на это значение
и все операции должны производиться уже с этим новым уменьшенным числом

4.Создать кнопку, по нажатию на которую, сформируется XMLHttp-запрос на сайт «http://domain.com», 
в котором параметрами будут переданы поле 1 и сумма полей 2 и 3 исходной таблицы, при условии что сумма больше 5.
Перед отправкой вывести alert с этими параметрами. Имя параметра формируется так: p1 – поле 1, ps – сумма полей 2 и 3.
Если под условие подходит несколько строк, то объединить это в один запрос

5.Создать кнопку, по нажатию на которую, появится iframe, внутри которого будет загружен site.html

При выполнении задания категорически запрещается:
1. пользоваться jQuery, Mootools и другими подобными фреймворками
2. Вносить какие-либо изменения в html-код исходной таблицы

Решение заданий должно быть:
1.Написано только на javascript с использованием DOM-методов
2.Поддерживаться ие7+ и фф3.5+
3.Все пункты задания должны быть выполнены как одно целое в составе одного javascript'a
4.Javascript-код должен быть размещен в конце site.html перед закрывающимся </body>
5.Все функции и переменные, которые будут написаны для решения заданий, должны являться методами и свойствами и принадлежать одному объекту. Например: 
hhh.tt = function() {… }
hhh.bb = 768
6. Решение должно корректно работать после переименовывания файла site.html
