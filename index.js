import cowsay from 'cowsay';
import chalk from 'chalk';

console.log(
    chalk.green(
    cowsay.think({
        text: "I love the green grass!",
        e: "^^",
        T: "U"
    })
)
);
