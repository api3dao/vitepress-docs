// https://forum.ionicframework.com/t/communicating-between-2-components/198375/3

import { TinyEmitter } from 'tiny-emitter';
const emitter = new TinyEmitter();
const eventBus = () => {
  return { emitter };
};
export default eventBus;
