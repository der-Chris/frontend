# v1

## User

Users email address is stored in the _id field, so that an email address uniquly identifies a user.

    {
      _id: string;
      password: string;
      firstname: string;
      lastname: string;
      ...
    }


## Question

    {
      _id: string;
      visibilityToken?: string;
      title: string;
      visibility: string;
      userId?: string;
      meta: {
        createdAt: Date;
        ip: string;
        userAgent: string;
      }
    }

* _id: Unique identifier for that document. Format: `/^[A-Za-z0-9]{12}$/`
* visibilityToken: Randomly generated token. This should act as kind of a
  shared key. If the visibility of this question is set to private, a random
  visibilityToken is generated. If the user does not provide this token, hea the
  url of that question. Format: `/^[A-Za-z0-9]{12}$/`
* title: Question title. Format: `/^[A-Za-z0-9 \-\+,:;\.?!'"()]+$/`
* visibility: Enum: `['public', 'private', 'password']`


### Create
`PUT /api/v1/question`

    {
      title: string;
      visibility: string;
    }

**Success**

Status Code: 200

    Question object

**Error**

Status Code: 400

    string


### Get
`GET /api/v1/question/:_id/:visibilityToken?`

If the question with the given _id has visibility set to 'private', the
provided visibilityToken is checked. If none was given or it does not match,
status code 401 is returned.

**Success**

Status Code: 200

    Question

**Error**

Status Code: 400

    string

Status Code: 401

    string


### Search
`POST /api/v1/question/search`

Body contains a valid Mongodb filter.

**Success**

Status Code: 200

    Question[]

**Error**

Status Code: 400

    string


## Suggestion

    {
      _id?: string;
      questionId: string;
      text: string;
      createdAt: Date;
      userId?: string;
    }

* _id: Unique identifier for that document. Format: `/^[A-Za-z0-9]{12}$/`
* questionId: Id of the question this suggestions belongs to.
  Format: `/^[A-Za-z0-9]{12}$/`
* text: Content of suggestion. Format: `/^[A-Za-z0-9 \/\-\+,:;\.?!=#'"()]+$/`


### Create
`PUT /api/v1/question/:_id/:visibilityToken?/suggestion`

    {
      text: string;
    }

**Success**

Status Code: 200

    Suggestion

**Error**

Status Code: 400

    string


### Get
`GET /api/v1/question/:_id/:key?/suggestions`

**Success**

Status Code: 200

    Suggestion[]

**Error**

Status Code: 400

    string

Status Code: 404

    string


## Comment

    {
      _id: string;
      suggestionId: string;
      text: string;
      createdAt: Date;
      userId?: string;
    }


## Vote

    {
      _id: string;
      suggestionId: string;
      value: number;
      createdAt: Date;
      userId?: string;
    }

* value: Either 1 or -1.
