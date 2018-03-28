module.exports = {
  prompt: ({ inquirer, args }) => {
    return inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: "What's the name of your new model"
    }, {
      type: 'checkbox',
      message: 'What else would you like?',
      name: 'components',
      choices: [
        {
          name: 'saga'
        },
        {
          name: 'component'
        },
        {
          name: 'page (not yet implemented)'
        },
      ]
    }])
  }
}