*Команды выполнять в git.bash, открытой в нужном репозитории (из нужной директории в проводнике клик правой кнопкой на любом месте, в контекстном меню - `git BASH here`)*

Клонирование репозитория
=====

`git clone <url>`

Если не выполняется с `fatal error` что-то про ssl
1. Выполняем в консоле `git config http.sslVerify false`, если возникает ошибка `... not in git repository ...`
a) пробуем склонировать снова командой `GIT_SSL_NO_VERIFY=true git clone ...`
b) Выполняем глобально `git config --global http.sslVerify false`

2. Если проблема с аутентификацией (не открывается окно с запросом логина/пароля), добавляем свой логин вместо LOGIN в урл:
`git clone  https://LOGIN@...restUrl.git`

Посмотреть список веток

1. Локальных `git branch`, если их много - жмем `enter`, если хотим выйти пишем - `:q`
2. Удаленных (origin) `git branch -r`

Переключение ветки
====

1. `git checkout <branch_name>`, например `git checkout develop`

Обновление ветки
====

`git pull` - стянуть обновление текущей ветки с удаленного репозитория
если предыдущая команда бросает ошибку, что есть локальные изменения, то:

1) `git status` - покажет локальные изменения в формате:
```
$ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
```

2) выбираем вариант `git restore <file>...` для всех локально измененных файлов (после `modified:`)
3) снова `git pull`

Настройка редактора для редактирования `git config -e`
===

Например, VS Code:
Make sure you can `run code --help` from the command line and you get help.

if you do not see help, please follow these steps:

Windows: Make sure you selected Add to PATH during the installation.

From the command line, run `git config --global core.editor "code --wait"`
