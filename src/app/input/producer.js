import pubSub from '../pubSub';

const inputText = document.querySelector('.input');
const emit = () => pubSub.publish('Input/value', inputText.value);
const start = () => inputText.addEventListener('input', emit);

export default { start };
