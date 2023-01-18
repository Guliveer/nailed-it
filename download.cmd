@echo off
cd /d %~dp0

set profile="ed_paznokcie"

cls && set "params=%*" && cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

if not exist %profile% mkdir %profile%
cd %profile%
del /q /f *
cd ..

call instaloader %profile%
cd %profile%
del /q /f /a:-d *.txt
del /q /f /a:-d *.json*
del /q /f /a:-d *.mp4
del /q /f /a:-d id
del /q /f /a:-d *profile_pic.jpg

echo Renaming files...
for /f %%a in ('dir /b ^| find /c /v ""') do set file_count=%%a
for /l %%x in (1, 1, %file_count%) do ren "*.*" "pic (%%x).jpg" 2>nul

exit
