import methods from 'validator';

class Validator {
  constructor(rules = []) {
    this.rules = rules;
    this.valid = true;
    this.errors = {};
  }

  init() {
    this.valid = true;
    this.errors = {};
  }

  validate(data = {}) {
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
  }

  isValid() {
    return this.valid;
  }
}

export default Validator;
