import pubSub from '../pubSub';

const names = ['Luiz', 'Guilherme', 'Mendes', 'Ferrari'];
const start = () => {
  for (const name of names) {
    const randomTime = Math.random().toFixed(2) * 10000;
    setTimeout(() => pubSub.publish('Test/names', name), randomTime);
  }
};

export default { start };
