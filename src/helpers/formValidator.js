const formValidator = (formName, fields) => {
    const form = document.forms[formName];
    const errors = {};
    fields.map((fieldName) => {
      const rules = JSON.parse(form[fieldName].getAttribute('valid'));
      if (rules) {
        const { required, minLength  } = rules;
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
        if (form['email'].value !== '') {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(form['email'].value)) {
              errors["email"] = "Please enter valid email address.";
            }
          }
        }
    });
    const size = Object.keys(errors).length;
    return { errors, size };
  };
  export default formValidator;