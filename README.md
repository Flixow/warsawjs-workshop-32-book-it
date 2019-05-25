# :fire: warsawjs-workshop-32-book-it :fire:

## Table of Contents :clipboard:

- [Features](#features-speedboat)
- [What you can learn](#what-you-can-learn-mortar_board)
- [Setup](#setup-hammer)
- [Steps](#steps)
  - [Basic Components](#basic-components)

## Features :speedboat:
* :gem: Fetching async data
* :gem: Filtering results
* :gem: Custom redux middleware
* :gem: Notifications service

## What you can learn :mortar_board:
* :diamonds: Next.js
* :diamonds: State management with Redux
* :diamonds: Thunk middleware
* :diamonds: Your custom middleware
* :diamonds: Translation module
* :diamonds: Reselect

## Setup :hammer:
* ```git clone https://github.com/Flixow/warsawjs-workshop-32-book-it.git```
* ```npm install``` or ```yarn install```
* ```npm run dev``` or ```yarn dev```

## Steps
### Basic components
* `MainViewHandler` used on Hotels page
* Add nProgress
* Create action for fetch hotels data
* Create promises middleware
* Create reducer for hotels
* Add SearchField to manipulate query params
* Filter items with query params

#### Single item
* Create custom routing
* Fetch and display single hotel

### Selectors
* Create selectors for average rating and price
* Display user name in the Nav with `ProfileNavSection` component without selector
* Dispatch mocked sign in action
* Create profile page with mocked 'update name' and 'update age' buttons
* Use selector to display user name in the nav

### i18n
* Install next-i18next version 0.37.0
* Create i18n. configuration fil
* Use next-i18next/middleware and add missingKeyHandler using multer to support formData

### Notifications middleware
* Create AppToast function to open notification
* Create middleware to handle notifications with redux actions
* Use sample notification on the fetchProfile action
