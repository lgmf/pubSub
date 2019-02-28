import pubSub from '../pubSub';
import producer from './producer';

const greeting = document.querySelector('.greeting');

const sayHello = (name) => greeting.textContent = `Hello ${name}!!`
const logger = (name) => console.log('Second subscriber ==>', name);

pubSub.subscribe('Test/names', sayHello);
pubSub.subscribe('Test/names', logger);

producer.start();
