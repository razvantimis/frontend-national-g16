
# Steps local

1. Local repo se face cu `git init`
2. Afiseaza stare repoului local  `git status`
3. Cu `git add {nume_fisier}` adaugam in stage
4. Cu `git commit -m "{orice mesaj}"`
5. `git log` afiseaza history-ul de commituri
6. `git checkout -b {nume branch}` se creaza un branch nou

# Steps

1. `git remote add origin git@github.com:razvantimis/my-repo.git` face legatura cu repo local
2. `git push -u origin main` - duce schimbarile ( fisierele ) locale pe remote
3. `git pull` - aduce ce avem remote la noi local


# Config 

1. Username and email
- Set your username: git config --global user.name "FIRST_NAME LAST_NAME"
- Set your email address: git config --global user.email "MY_NAME@example.com"

2. Add ssh https://github.com/settings/keys - docs https://docs.github.com/en/authentication/connecting-to-github-with-ssh