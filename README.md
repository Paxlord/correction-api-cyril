# API Users

## Overview
The API allows users to retrieve all of the users of the application in micro service through a REST architecture. This API will be mainly used for registed Accounts.

It will also create own users to recover data to the platform but is in no way related to the users collected via the crawling of profiles on Social Networks.

### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'firstname': String, // Required
  'lastname': Number, // Required
  'age': Number, // Required
  'password': String, // Required
  'email': String // Required and Uniq
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String
  }
```

### [POST] Show user
Show an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : GET → user/:id

#### Parameters :
```javascript
{
  id: String // Required
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String
  }
```

### [PUT] Update user
Update an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : PUT → user/:id

#### Parameters :
```javascript
{
  id: String // Required
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String
  }
```

### [DELETE] Delete user
Delete an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : DELETE → user/:id

#### Parameters :
```javascript
{
  id: String // Required
}
```

#### Response :
```javascript
  {
    id: Object_ID,
    firstname: String,
    lastname: String,
    age: Number,
    password: String,
    email: String
  }
```

### Requirements
* node 16
* npm or yarn
* git
* mongodb (please configure config.js for link mongodb)

### Install
```yarn install```

### Production mode
```yarn prod```

### Dev mode
``` yarn dev```