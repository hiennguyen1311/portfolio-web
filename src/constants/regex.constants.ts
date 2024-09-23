export const RegexPattern: Record<string, RegExp> = {
  string: /^(?!\s)(?!.*\s$).+/,
  email: /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?<![.-])$/,
  userNameOfEmail: /^(?=.{1,64}@)[^@]+@[^@]+$/,
  telephone:
    /^(?:(?:\(\+\d{1,4}\)|\+\d{1,4})\s*)?(?:\(\d{1,4}\)\s*\d+(?:[-.]?\s*\d+)*|\d+(?:[-.]?\s*\d+)*(?:ext\.?\s*\d+)?)?$/,
  patternFilter: /^[a-zA-Z0-9._ \t]{1,255}$/,
  notSpecialCharacters: /^[a-zA-Z0-9_.-]*$/,
  specialCharKeyboard: /^[a-zA-Z0-9@$!%*#?&^_ -]+$/,
  specialCharForTel: /^[^!@#$%^&*_=\\[\]{}|:;"'<>,/?`~]*$/,
  notSpaceInString: /^[^\s]*$/,
  stringNotSpace: /^[^\s][^\s]*[^\s]$/,
  stringNotSpaceBeginEnd: /^\S(.*\S)?$/,
  specialCharactersExceptHyphen: /^[a-zA-Z0-9-_]{0,100}$/,
  phoneNumber: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
  number: /^\d+$/,
  escapeRegExp: /[.*+?^${}()|[\]\\]/,
};
