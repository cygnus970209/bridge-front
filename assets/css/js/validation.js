// 이메일 형식 체크
const emailValidation = emailAddress => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(emailAddress);
};

export { emailValidation };
