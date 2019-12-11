export default function formValidator(values) {
  const errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // Name Errors
  if (!values.name) {
    errors.name = 'Required Name';
  } else if (values.name.length < 2) {
    errors.name = 'Password must be at least 2 characters';
  }
  return errors;
}
