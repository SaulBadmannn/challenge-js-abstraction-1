# url.js
Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

make(url) - Конструктор. Создает урл.

setProtocol(data, protocol) - Сеттер. Меняет схему.
]
getProtocol(data) - Селектор (геттер). Извлекает схему.

setHost(data, host) - Сеттер. Меняет хост.

getHost(data) - Геттер. Извлекает хост.

setPath(data, path) - Сеттер. Меняет строку запроса.

getPath(data) - Геттер. Извлекает строку запроса.


setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.

getQueryParam(data, paramName, defaultValue = null) - Геттер. Извлекает значение для параметра запроса. Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра

toString(data) - Геттер. Преобразует урл в строковой вид.

``` javascript
const url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'
```
### Подсказки
Используйте стандартный объект URL для работы с адресами: [URL]("https://nodejs.org/api/url.html#url_url_strings_and_url_objects")

Методы [set()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/set) и [get()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get)