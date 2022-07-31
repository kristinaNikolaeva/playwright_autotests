# autotests

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)

## About <a name = "about"></a>

This is a repository for a test task

## Getting Started <a name = "getting_started"></a>

1. Install Node.js and npm
2. Clone the repository

```
git clone https://github.com/kristinaNikolaeva/playwright_autotests

```

3. Install dependencies

```
cd autotests
npm install

```

## Usage <a name = "usage"></a>

1. Run autotests

```
npx playwright test

```

2. Generate and open allure report

```
allure generate allure-results -o allure-report --clean
allure open allure-report

```
