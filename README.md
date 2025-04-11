# USCGeoGuesser

## clone this repository. Open a separate branch and push everything to that branch

```
git clone git@github.com:Epiphany625/USCGeoGuessr.git
git checkout -b "your_new_branch_name"
// assume you have made some changes and now decide to push it to the repository
git status
git add .
git commit -m "a short description of your changes. Please be precise."
git push origin "your_new_branch_name"
```

After you push your changes, Xinyang Xu will merge the branch into the main.

**How to Run the Frontend React Application**

```
cd frontend
npm install
npm run dev
```
If you do not have npm installed, please refer to documentations.
You can also view the published React application at https://epiphany625.github.io/USCGeoGuessr/

**How to Run the Spring Boot Application**
IntelliJ Ultimate Version, Java version 21+, navigate to project root directory, and hit the green run button.
**Set Up Database**
Database is set up at AWS RDS. Please contact Xinyang Xu to access it, as it contains password information.
**Edit application.properties**
Please contact Xinyang Xu to correctly use application.properties.
