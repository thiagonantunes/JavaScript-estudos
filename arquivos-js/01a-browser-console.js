console.warn('Warning');

console.error('Error');

const x = 100;

console.group('simple');
console.log(x);
console.error('alert');
console.log('warn');
console.groupEnd

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%chello world', styles);