let test , count = 0

const pets = 'cat dog bat';
test = ['cat', 'dog']

for (let i = 0; i < test.length; i++) {
        if (pets.includes(test[i])) {
                count = count +1
        }
}

console.log(count);