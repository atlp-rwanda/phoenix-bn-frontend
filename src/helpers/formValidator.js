const formValidator = (formName, fields) => {
  const form = document.forms[formName];
  const errors = {};
  fields.map((fieldName) => {
    const rules = JSON.parse(form[fieldName].getAttribute('valid'));
    if (rules) {
      const { required, minLength } = rules;
      if (required) {
        if (form[fieldName].value == '') {
          errors[fieldName] = `${`${fieldName} is Required`}`;
        }
      }
      if (minLength) {
        const { length } = form[fieldName].value;
        if (minLength > length) {
          errors[fieldName] = `${`${fieldName} should be ${minLength} chars long`}`;
        }
      }
    }
  });
  const size = Object.keys(errors).length;
  return { errors, size };
};
export default formValidator;
