import pubSub from '../pubSub';
import producer from './producer';

const result = document.querySelector('.result');
pubSub.subscribe('Input/value', (value) => result.textContent = value);

producer.start();
