# HOW TO USE GIT 

Nese jemi duke perdoru nje pc te re, fillimisht duhet me konfigu accountin, me ane te komandave:

    git config  --global user.name "emriGitHub"
    git config  --global user.email "someone@gmail.com"

Fillimisht krijoni nje repository ne GitHub

E nisim projektin me ane te komandes:
    
    git init

I selektojm gjitha files me ane te komandes:

    git add -A

Nese doni me dergu vetem nje file te caktuar, atehere perdorni komanden

    git add fileName.js

Nese deshrioni me kontrollu gjendjen e file-ave qe jane modifik(changed)

    git status

Pasi qe jemi gati me modifikim e dergojm gjendjen (fotogranfine) e projektit dhe mesazhin se cka eshte modifiku

    git commit -m "Mesazhi jone"

E lidhim projektin tone lokalisht me repostoryin ne GitHub, me ane te komandes 
    Merre nga GitHun copy paste
    git add remote origin "https://github/undercoverLee/weather-app"  

E dergojm projektin 

    git push origin master


