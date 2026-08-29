@echo off
echo ========================================================
echo Pushing Let's Explore DMC to GitHub Repository:
echo https://github.com/Asmitakukreja18/letsexplore-dmc.git
echo ========================================================
cd /d "%~dp0"
git init
git remote set-url origin https://github.com/Asmitakukreja18/letsexplore-dmc.git 2>nul || git remote add origin https://github.com/Asmitakukreja18/letsexplore-dmc.git
git add .
git commit -m "Update Let's Explore DMC website code"
git branch -M main
git push -u origin main
echo.
echo ========================================================
echo SUCCESS! Your website code is pushed to GitHub!
echo ========================================================
pause

