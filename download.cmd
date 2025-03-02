@echo off
cd /d %~dp0

set profile="ed_paznokcie"
set folder_name="pictures"

cls && set "params=%*" && cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && ""%~s0"" %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

if not exist %folder_name% mkdir %folder_name%
cd %folder_name%
del /q /f *

cd ..

call instaloader %profile% --dirname-pattern %folder_name% --no-resume --no-profile-pic --no-videos --no-captions --no-metadata-json --no-compress-json 
cd %folder_name%
del /q /f /a:-d *.txt
del /q /f /a:-d *.json*
del /q /f /a:-d *.mp4
del /q /f /a:-d *id
del /q /f /a:-d *profile_pic.jpg
del /q /f /a:-d 2021-12-14_15-55-46_UTC.jpg
del /q /f /a:-d 2023-04-09_11-16-08_UTC.jpg

for /f %%a in ('dir /b ^| find /c /v ""') do set file_count=%%a
echo Renaming files [%file_count%]...
for /l %%x in (1, 1, %file_count%) do ren "*.*" "pic (%%x).jpg" 2>nul

cd ..

echo Updating image count...
echo let imgCount = %file_count%;> assets\js\imgCount.js

exit
