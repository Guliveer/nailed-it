@echo off

@REM Ping https://guliveer.github.io/nailed-it/, if no answer, update chrome card to ./index.html, else update chrome card to pinged url

ping -n 1 guliveer.github.io > nul 2>&1

set /a url = "https://guliveer.github.io/nailed-it/"
set index = %~dp0/index.html

if %errorlevel% == 0 (
    echo Ping successful, updating chrome card to https://guliveer.github.io/nailed-it/...
    start chrome.exe --app=%url%
) else (
    echo Ping failed, updating chrome card to ./index.html...
    start chrome.exe --app=%index%
)