const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Geben Sie eine IP Adresse ein: \n ', (answer) => { 
const dns = require('dns');
const options = {family: 4, hints: dns.ADDRCONFIG | dns.V4MAPPED,};
address = answer.split(" ");
for (var i = 0; i < address.length ; i++) {
	dns.lookup(address[i], options, (err, address, family) =>
  console.log('Adresse: %j ', address));
}
  rl.close();
});
