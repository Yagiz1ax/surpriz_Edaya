@echo off
where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm are required. Install Node.js, then open this folder again.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 pause & exit /b 1
call npm run dev -- --open
pause
