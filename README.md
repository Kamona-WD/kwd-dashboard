# K-WD Dashboard

Fully responsive dashboard template built with tailwindcss.

[![GitHub license](https://img.shields.io/github/license/Kamona-WD/kwd-dashboard)](https://github.com/Kamona-WD/starter-dashboard-layout/blob/main/License.md)
[![GitHub stars](https://img.shields.io/github/stars/Kamona-WD/kwd-dashboard)](https://github.com/Kamona-WD/kwd-dashboard/stargazers)

##### To get started:
> This repo is a monorepo using Yarn workspaces. The package manager used to install and link dependencies is [Yarn v1](https://classic.yarnpkg.com/lang/en/).

1. Clone the repository:
```sh
git clone https://github.com/Kamona-WD/kwd-dashboard.git

cd kwd-dashboard
```

2. Install the dependencies:
```sh
yarn install
```

3. Start the development server:
- html version
```sh
# you need to link kwd-cli
yarn workspace kwd-cli link

# then
yarn workspace kwd-html link kwd-cli

# know you can run
yarn html:dev

# this will run dev command in kwd-html workspace which start:
# html:watch `watch njk files in src/html`
# js:watch `watch js files in src/assets/js`
# css:watch `watch css files in src/assets/css`
```
- vue version
```sh
yarn vue:dev

# this will run dev command in kwd-vue workspace.
```




