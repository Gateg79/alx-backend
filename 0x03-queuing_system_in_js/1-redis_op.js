import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', err => console.log('Redis client not connected to the server:', err));
client.connect()

function setNewSchool(schoolName, value) {
    client.set(schoolName, value).then(() => {
        console.log('Reply: OK');
    }
)
}

function displaySchoolValue(schoolName) {
    client.get(schoolName).then((data) => {
        console.log(data);
    })
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
