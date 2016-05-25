# v1

## User

Users email address is stored in the id field, so that an email address uniquly identifies a user.

    {
      id: string;
      password: string;
      firstname: string;
      lastname: string;
      ...
    }


## Question

    {
      id: string;
      title: string;
      visibility: string;
      visibilityToken?: string;
      meta: {
        createdAt: Date;
        userId?: string;
        ip: string;
        userAgent: string;
      }
    }

* id: Unique identifier for that document. Format: `/^[A-Za-z0-9]{12}$/`
* title: Question title. Format: `/^[A-Za-z0-9 \-\+,:;\.?!'"()]+$/`
* visibility: Enum: `['public', 'private', 'password']`
* visibilityToken: Randomly generated token. This should act as kind of a shared key. If the visibility of this question is set to private, a random visibilityToken is generated. If the user does not provide this token, hea the url of that question. Format: `/^[A-Za-z0-9]{12}$/`


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
`GET /api/v1/question/:id/:visibilityToken?`

If the question with the given id has visibility set to 'private', the provided visibilityToken is checked. If none was given or it does not match, status code 401 is returned.

**Success**

Status Code: 200

    Question

**Error**

Status Code: 400

    string

Status Code: 401

    string


### Search
`GET /api/v1/questions/:options`

Get a list of questions for which the given options.filter matches.

TODO how shall the options object look like? How are filter given?

Options must be an object like this:

    {
      filter: TODO
      sort: TODO
      offset: number;
    }

**Success**

Status Code: 200

    Question[]

**Error**

Status Code: 400

    string


## Suggestion

    {
      id?: string;
      questionId: string;
      text: string;
      meta: {
        createdAt: Date;
        userId?: string;
        ip: string;
        userAgent: string;
      }
    }

* id: Unique identifier for that document. Format: `/^[A-Za-z0-9]{12}$/`
* questionId: Id of the question this suggestions belongs to.
  Format: `/^[A-Za-z0-9]{12}$/`
* text: Content of suggestion. Format: `/^[A-Za-z0-9 \/\-\+,:;\.?!=#'"()]+$/`


### Create
`PUT /api/v1/question/:id/:visibilityToken?/suggestion`

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
`GET /api/v1/question/:id/:visibilityToken?/suggestions`

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
      id: string;
      suggestionId: string;
      text: string;
      meta: {
        createdAt: Date;
        userId?: string;
        ip: string;
        userAgent: string;
      }
    }


## Vote

    {
      id: string;
      suggestionId: string;
      value: number;
      meta: {
        createdAt: Date;
        userId?: string;
        ip: string;
        userAgent: string;
      }
    }

* value: Either 1 or -1.
