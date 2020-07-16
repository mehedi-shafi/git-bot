let messages = [
`It's a civilized server, act like a civilized person.
I know you can do this {{username}}
`,

`It's a bird,
It's a plane,
It's {{username}} dropping like superhero`,

`Don't be shy {{username}} to send message here, we won't judge you.`,

`You think google classroom is cool, huh!! 
{{username}}, you just wait.`,

`Oh! It's you {{username}}`,

`Oidaa! {{username}}`,

`Hey @everyone look, its {{username}}. 
Say hello, and don't be mean.`
];

let getMessage = (username) => {
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    randomMessage = randomMessage.replace('{{username}}', username);
    return randomMessage;
};

export default getMessage = getMessage;