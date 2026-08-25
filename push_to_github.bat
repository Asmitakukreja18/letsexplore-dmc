@echo off
echo ========================================================
echo Pushing Let's Explore DMC to GitHub Repository:
echo https://github.com/Asmitakukreja18/letsexplore-dmc.git
echo ========================================================
cd /d "%~dp0"
git remote set-url origin https://github.com/Asmitakukreja18/letsexplore-dmc.git
git branch -M main
git push -u origin main
echo.
echo ========================================================
echo SUCCESS! Your website code is pushed to GitHub!
echo ========================================================
pause
