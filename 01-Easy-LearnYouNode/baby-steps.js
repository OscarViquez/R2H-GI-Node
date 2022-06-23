let sum = 0;

for (let index = 2; index < process.argv.length; index++) {
    // console.log(`The Array Index: ${Number(process.argv[index])}`);

    sum += Number(process.argv[index]);

    // console.log(`The Sum / Total: ${sum}`);
}

console.log(sum);