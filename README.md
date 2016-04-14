# The RabbitBird ES2015 Kit

[![The RabbitBird ES2015 Kit](img/logo.png)](https://rabbitbird.com/)

Aiming to be the world's simplest setup for transpiling, linting and loading ES2015 in the browser!

Now everyone can learn and experiment with ES2015.

**NOTE**: THis is a browser specific project. Using ES2015 in Node.js is a lot simpler and is well covered by the babel documentation.


## Requirements

Node.js is the only requirement. We recommend you use the latest version available.


## Getting Started

Clone or download this repository to your computer.


## Setup

Once downloaded, open a commandline window, change into this root directory for this project, then run `npm install` to install all required dependencies.


## To verify everything is working
 
Run in this order:
 - `npm run check`
 - `npm run lint`
 - `npm run build`
 - `npm run server`
 
After running `npm run server`, open a web browser and navigate to http://localhost:8080/. Open the Developer Tools for your browser and you should see a message in the console.
 
 
## Supported browsers 

 - Chrome
 - Microsoft Edge
 - Internet Explorer 11
 - Firefox
 - Safari
 - Opera


## Troubleshooting

If you're having trouble, please raise an issue on Github.


## Why I created this project.

I teach classes on ES2015 and was frustrated with the size, complexity and scope of the current boilerplate / starter kits.

I wanted something that would:
  - Teach someone why everything in the starter kit exists.
  - Enable every part of the project to be tinkered with, without being an expert in ES2015, Babel or ES2015 module loading.
  - Empower people to re-think the typical approach to building and tooling for Web projects.


## Resources

 - `.babelrc`:      The simplest, yet still usable configuration.
 - `.eslintrc`:     Used [Google's version](// https://gist.githubusercontent.com/dmnsgn/75926316af5360c379da/raw/c4954c3c2ad6fb40613b07fb40645b52211a1238/.eslintrc.js) with some slight modifications. Thanks Googlers!
 - `package.json`:  Everything you need to start using ES2015, nothing you don't.

## Contributing

I would welcome contributions, questions and feedback and will do my best to respond in a timely manner.

Bear in mind this is not a HTML5 boilerplate competitor or the like. It's just a simple project that shows the minimal amount of third party resources and code required to transpile, lint and load ES2015.

I would be particularly interested in contributions which make this project even simpler or leaner and which improve the documentation and ease of which all components can be understood.


## License

Apache 2.0
Copyright 2016 RabbitBird 