export const emailValidate = (email: string) => {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) return "Email is required";
  if (!emailValid.test(email)) return "Invalid email format";

  return "";
};
