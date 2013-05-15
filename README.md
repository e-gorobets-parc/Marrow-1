# Marrow.js

`Marrow.js` это микрофреймворк с загрузчиком, который позволяет создавать в страницу "песочницу" и загружать в нее любое веб приложение предоставляя ему api для работы как с основной страницей + набор полезных утилит.

---

`Marrow.js` предоставляет следующие механизмы:

1. Загрузка веб-приложения в песочницу с настройкой кастомного окружения и подгрузкой зависимостей через рецепты;
1. Для каждого приложения можно подключить один рецепт который определяет список зависимостей для запуска приложения. Так же отвечает за подготовку окружения песочницы

---

## Загрузчик
###### Расположение: `core/core.loader.js`

Загрузчик `Marrow` является оберткой над загрузчиком [curl.js](https://github.com/cujojs/curl/) собранного с плугинами `js`, `css`, `link`. 

В свою очередь предотвращая проникновение переменных `curl.js` в глобальную область видимости, а так же предоставляя следующие возможности:

1. Настройка загрузчика в зависимости от настроек приложения;
1. Определение и автоматическая подстановка необходимых префиксов в зависимости от расширения файла;
1. Возможность контролировать область загрузки файлов:
	* Загрузка в "песочницу" к текущему приложению. Поведение по умолчанию;
	* Загрузка в основную страницу. Используется для загрузки стилей в область видимости страницы;
1. В зависимости от параметра запуска приложения позволяет загружать девелоперские версии файлов или же пожатые и минифицированные (файлы для продакшена).

Все статические ресурсы должны хранится в папке `/static` путь до которой можно указывать в настройках приложения (_см. соответсвующий раздел_).

Загрузчик предоставляет следующие преднастроенные правила для загрузки файлов:

* `root` – Правило указывает на директорию `js`. Cоздано "на всякий случай" и вредли пригодится в реальных условиях;

	```
"root/marrow.js" => site.com/static/js/marrow.js
```

* [__deprecated__] `core` – Правило указывает на директорию `js/core`. Создавалось для загрузки файлов ядра. Начиная с версии `0.2.15` ядро без сборки не работоспособно.

	```
"core/core.observatory.js" => site.com/static/js/core/core.observatory.js
```

* `system` – Правило указывает на директорию `js/libs`. Cоздано

	```
"system/jquery/jquery.caret.min.js" => site.com/static/js/libs/jquery/jquery.caret.min.js
```

* `recipes` – Правило указывает на директорию `js/recipes`. Cоздано
* `helpers` – Правило указывает на директорию `js/helpers`. Cоздано
* `recipe` – Правило указывает на директорию `js/recipes/<имя выбранного рецепта>`. Cоздано
* `recipe_libs` – Правило указывает на директорию `js/recipes/<имя выбранного рецепта>/libs`. Cоздано

## Рецепты
###### Расположение: `recipes/simple/recipe.js`

Для каждого приложения можно подключить один рецепт который определяет список зависимостей для запуска приложения. Так же отвечает за подготовку окружения песочницы перед инициализацией приложения.

Рецепт может 

### Транзиты

_Скоро…_

### Параметры приложения

_Скоро…_

---

### TODO

1. Дописать ReadMe;
2. Написать примеры работы;
3. Вынести демки в бранч `gh-pages`;
4. Сделать документацию по коду;

---

### Автор
[Anton Ignatov](https://github.com/a-ignatov-parc)

Так же особое спасибо за помощь:

* [Филипп Андрейчев](https://github.com/f-andrejchev-parc)

[И всем остальным кто помогал](https://github.com/a-ignatov-parc/Marrow/contributors)