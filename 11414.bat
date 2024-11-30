@echo off
setlocal enabledelayedexpansion

:: Variable setup
for %%i in (1,2,3,4,5,6,7,8,9,10,11) do (
    set u%%i=!random!!random!
    set c%%i=!random!!random!!random!
)

:Entry
cls
color 3
echo WELCOME
echo.
set /p iU=User:
set /p iC=Key:
set g=0

for %%i in (1,2,3,4,5,6,7,8,9,10,11) do (
    if /i "!iU!"=="!u%%i!" if /i "!iC!"=="!c%%i!" set g=1 & goto :ok
)

:: Denied branch
echo DENIED
pause
goto :Entry

:ok
cls
title OK SYSTEM
echo GRANTED 
echo Continue
pause

:: Address branch example obfuscated
:Addr
set X=!random!
set Y=!random!
set Z=!random!
echo System Address Generator:
echo [%X%.%Y%.%Z%]
pause
goto Entry
