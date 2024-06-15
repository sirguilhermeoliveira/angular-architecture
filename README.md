## Template Angular

# Template using react with common libs, and a pre-made architecture.

# 📋 Requirements for running project without Docker

Node 14.18.0+

yarn

# 🛠️ Run project

In terminal use: ng serve or npm start

# 📌 Files pattern

*core* - 
{

    **guards**

    classes that determine whether a route should be processed or not based on certain conditions.

    **services**

    Here is the api files that are used for the integration

}

*features* - contains the pages

*shared*
{
    **assets**

    This is where the project images, translation and icons belong

    **components**

    Here we place the components that are part of the pages, what makes a component a component is that it can be reused


    **constants**

    Here are the project specifications, such as your logos, color palette, colors, environment variables, keys. Which are used throughout the project

    **layouts**

    Contains layout components or modules used to structure the overall layout of the application. This might include components like header, footer, sidebar, etc.

    **utils**

    Contains utility functions or classes that are used across the application. These utilities provide common functionalities that can be reused throughout the proje

}

*store*

Global storage using NgRx

*environments*

Contains environment-specific configuration files.

# 📦 Commits pattern

[type]: [description]

**test**: indicates any type of creation or alteration of test codes. Example: Creating unit tests.

**feat**: indicates the development of a new feature to the project. Example: Addition of a service, functionality, endpoint, etc.

**refactor**: used when there is a code refactoring that does not have any impact on the system's business logic/rules. Example: Code changes after a code review

**style**: employed when there are formatting and style changes to the code that do not change the system in any way.

Example: Change style-guide, change lint convention, fix indentations, remove whitespace, remove comments, etc..

**fix**: used when correcting errors that are generating bugs in the system.

Example: Applying handling to a function that is not having the expected behavior and returning an error.

**chore**: indicates design changes that do not affect system or test files. These are developmental changes.

Example: Change eslint rules, add prettier, add more file extensions to .gitignore

**docs**: used when there are changes to the project documentation.

Example: add information in the API documentation, change the README, etc.

**build**: used to indicate changes that affect the project's build process or external dependencies.

Example: Gulp, add/remove npm dependencies, etc.

**perf**: indicates a change that improved system performance.

Example: change ForEach to while, improve the database query, etc.

**ci**:

used for changes in CI configuration files.
Example: Circle, Travis, BrowserStack, etc.

**revert**: indicates reverting a previous commit.

# ✔️ Running with Docker

Install docker

docker build -t angular-architecture .

docker run -p 8081:8081 -d angular-architecture

docker-compose up -d

After that process you can use only "docker-compose up" to open the project.
