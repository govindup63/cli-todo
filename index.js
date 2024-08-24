const { Command } = require('commander');
const program = new Command();
const fs = require('fs')
const path = require('path')

const TodoFile = path.join(__dirname, 'todos.json')


program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('add')
  .description('add the todo to the list')
  .argument('<string>', 'string to split')
  .action((str) => {
    fs.readFile(TodoFile, 'utf8', (err, data) => {
      if (err) {
        console.error("error reading the file", err)
        return;
      }
      let jsondata;

      try {
        jsondata = JSON.parse(data);
      }
      catch (parseError) {
        console.error('Error parsing JSON data ', parseError)
        return;
      }
      jsondata.push({ str });

      const updatedJsonData = JSON.stringify(jsondata, null, 4)
      fs.writeFile(TodoFile, updatedJsonData, 'utf8', (writeError) => {
        if (writeError) {
          console.error("error adding the todo", writeError)
          return;
        }
        console.log("todo added successfully");
      })
    })
  });

program.command('list')
  .description('list all the todos of the day')
  .action(() => {
    console.log("items listed");
  })

program.command('done')
  .description('remove the completed todos from the list')
  .argument('<string>', 'task no. to get deleted')
  .action((str) => {
    console.log("you removed this task " + str)
  })
program.parse();
