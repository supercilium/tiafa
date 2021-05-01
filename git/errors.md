SSL certificate problem: self signed certificate in certificate chain
---

git config http.sslVerify false

or in command line

 GIT_SSL_NO_VERIFY=true git clone ...

I want to make VS Code as default editor for `git config -e`
---

Make sure you can run `code --help` from the command line and you get help.

1. if you do not see help, please follow these steps:

* Mac: Select Shell Command: Install 'Code' command in path from the Command Palette.
Command Palette is what pops up when you press ``shift + ⌘ + P`` while inside VS Code. (`shift + ctrl + P in Windows`)

* Windows: Make sure you selected Add to PATH during the installation.

* Linux: Make sure you installed Code via our new .deb or .rpm packages.

2. From the command line, run `git config --global core.editor "code --wait"`

3. In a case of `code: command not found` on OSX

* Make sure Visual Studio Code is exists in Application folder

* Open the Command Palette via (⇧⌘P) and type shell command to find the Shell Command:

`> Install 'code' command in PATH`

[Visual Studio Docs](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

