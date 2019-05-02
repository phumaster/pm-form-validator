## Validator helper

### Usage

```
  this.state = {
      name: '',
      email: '',
      address: '',
      subject: '',
      message: '',
      errors: {},
    };
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
    const rules = [
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'The name field is required.',
      },
      {
        field: 'name',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'The name must be at least 5 characters.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'The email field is required.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
      },
      {
        field: 'address',
        method: 'isEmpty',
        validWhen: false,
        message: 'The address field is required.',
      },
      {
        field: 'message',
        method: requiredWith,
        args: ['subject'],
        validWhen: true,
        message: 'The message field is required when subject is present.',
      },
    ];
    this.validator = new Validator(rules);
```

### Relates to

- [https://www.npmjs.com/package/validator](https://www.npmjs.com/package/validator)

- [https://viblo.asia/p/reactjs-viet-mot-validator-class-don-gian-dung-de-validate-form-aWj53p8PK6m](https://viblo.asia/p/reactjs-viet-mot-validator-class-don-gian-dung-de-validate-form-aWj53p8PK6m)
