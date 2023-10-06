export const VALIDATION_MESSAGES = {
    required: 'This field is required..',
    email: 'Invalid email format. Please check your email and try again',
    minlength: (value) => {
      return `Field should be atleast minimun ${value} characters long.`
    },
    maxlength: (value) => {
      return `Field should be atleast maximum ${value} characters long.`
    },
    pattern: 'Sorry, the input provided is not valid. Please revise your input to match the required format.'    
  };