import pubSub from '../pubSub';

const input = document.querySelector('.input');
const searchBtn = document.querySelector('.btn.search');
const emit = () => pubSub.publish('Input/value', input.value);

export default searchBtn.addEventListener('click', () => emit());
