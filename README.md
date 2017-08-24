# FACN Recipe 4.0

The ultimate FACN Recipe app.
A simple recipe application for members of Founders & Coders community in Nazareth.

### To get started:
Click [here](https://facnrecipev4.herokuapp.com) to use FACN Recipe 4.0.

Or you can clone this repository.
```
git clone
```
Install the dependencies
```
npm i
```
Run devStart
```
npm run devStart
```

### User story:
We need to have an app where users need to upload recipes and other users can see those recipes.
As a student/mentor of Founders & Coders based in Nazareth, the user should be able to...
+ login securely to the app
+ create a new recipe
+ browse available recipes
+ filter recipes by origin food type
+ view the most recent recipes

### Schema
**recipes**

| id  | title    | difficulty | duration |ingredients | procedure | cuisine | author_id |
| --- | -------- | ---------- |--------- | ---------- | --------- | ------- | --------- |

**users**

| id  |  username | password | name | surname | email |
| --- | --------- | -------- | ---- | ------- | ----- |


### Wireframe & Architecture

![](./wireframe.png)

### To do list:   
- [x] create repository
- [x] create file structure
- [x] create wireframe
- [x] write this beautiful readme
- [x] create the database
- [x] create the login and sign up forms
- [x] try login
- [x] present page with recipe titles, difficulty and time
- [x] be able to click on the recipe
- [x] be able to be redirected to the unique recipe page /:id
- [ ] attempt the stretch goals

### Stretch goals
- be able to 'heart' the recipe
- Be able to review recipes
- Function for editing/deleting recipes only for the user that created the original recipe
- Admin authentication to edit/delete any recipes

### Rules
- All team members must review before a branch is merged
