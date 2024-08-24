import { Command } from 'commander';
const program = new Command();
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

      let count = 1;
      for (let i = 0; i < jsondata.length; i++) {
        console.log(count + ". " + jsondata[i].str);
        count++;
      }
    })

  })

program.command('tick')
  .description('remove the completed todos from the list')
  .argument('<number>', 'task no. to get deleted')
  .action((num) => {
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

      function removeDataByIndex(index) {
        // Check if the index is within the bounds of the array
        if (index >= 0 && index < jsondata.length) {
          // Remove 1 item at the specified index

          console.log(`your taks ${jsondata[index].str} is now removed`);
          jsondata.splice(index, 1);
        } else {
          console.error('Invalid index. No task removed.');
        }
      }
      removeDataByIndex(num - 1)
      const updatedJsonData = JSON.stringify(jsondata, null, 4)
      fs.writeFile(TodoFile, updatedJsonData, 'utf8', (writeError) => {
        if (writeError) {
          console.error("error deleting the todo", writeError)
          return;
        }
        console.log("todo removed successfully");
      })
    })
  });

program.parse();
