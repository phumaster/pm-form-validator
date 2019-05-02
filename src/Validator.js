import methods from 'validator';

function Validator(rules = []) {
  let valid = true;
  const errors = {};

  const init = () => {
    this.valid = true;
    this.errors = {};
  };

  const validate = (data = {}) => {
    this.init();
    this.rules.forEach(rule => {
      if (this.errors[rule.field]) return;
      const value = data[rule.field] || '';
      const args = rule.args || [];
      const validationMethod = typeof rule.method === 'string' ? methods[rule.method] : rule.method;
      if (validationMethod(value, ...args, data) !== rule.validWhen) {
        this.errors[rule.field] = rule.message;
        this.valid = false;
      }
    });
    return this.errors;
  };

  const isValid = () => this.valid;
}

export default Validator;
