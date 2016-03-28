# v1

## Question

    {
      _id: string;
      key: string;
      title: string;
      visibility: string;
      createdAt: string;
    }

* id: Unique identifier for that document. Format: /^[A-Za-z0-9]{12}$/
* key: Randomly generated key. The idea is, to attach this key to the link which is shared. If a user has a "public" question and shares the link, but at some point wants to change the visibility to "private", the system will generate a new key which is part of the url. Since the previously shared link had the old key included, that link does not work anymore, but the user can share the new link with the new key with users he want to work with. Format: /^[A-Za-z0-9]{12}$/
* title: Question title. Format: /^[A-Za-z0-9 -+,;.?!]+$/
* visibility: Enum: ["public", "private", "password"]

### Create
`POST /api/v1/question/create`

    {
      title: string;
      visibility: string;
    }

Response:

Success: Status Code: 200

    {
      id: string;
      key: string;
      title: string;
      visibility: string;
    }

Error Status Code: 400

    {
      err: string;
    }
