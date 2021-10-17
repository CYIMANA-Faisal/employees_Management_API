# employees_Management_API

> You can find environment variables and coveralls repo token in `sample-env.md` file. Make sure you have all required environment variables in your .env file before you start Running this project locally.

### Cloning and Installing dependency

Clone this repo and make sure you have node installed anm npm
Please navigate to this project root folder and run the command

```
npm install
```

in your terminal

### Database migration

```
npm run migrate
```

### Postman collection of API requests

Download the postman collection and import it into your postman client

```
https://drive.google.com/file/d/14Obe2cRU9T2zD2VBgJ4hY9-HJS6xV0ln/view?usp=sharing
```

### Create environment variable in your postman that has the following variables

```
1. baseUrl it value to be http://localhost:3000/api/v1
2. token it value to be the access token obtained after successfull login
```

### Note

in you env file make sure you are having postgress database connection string in DB_URL_DEV variable

### Running the application

```

npm run dev

```

```

```
