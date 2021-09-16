const userInput = document.getElementById('inpt')! as HTMLInputElement; //typecasting if we sure its not null
userInput.value = 'developer';
if (userInput) {
  // If we are not sure about it
  (userInput as HTMLInputElement).value = 'developer';
}
interface Errorr {
  // to use for uncertain objects
  [key: string]: string;
}
const error: Errorr = {
  email: 'not a valid email',
};
