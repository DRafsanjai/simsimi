const simsimi = require('..')({
  key: 'Fc~poIp3FIAILz1imebYOlPF5JWbCQbZtdovMret',
});

simsimi('Hello').then(response => {
  console.log(response);
}, e => console.error('simsimi error:', e));
