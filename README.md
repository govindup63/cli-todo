# todo-cli

**todo-cli** is a simple command-line tool to manage your to-do tasks efficiently. It allows you to add, list, and remove tasks directly from your terminal.

## Installation

To install **todo-cli**, clone the repository and run the installation script:

```bash
git clone https://github.com/yourusername/todo-cli.git
cd todo-cli
npm install -g
```

## Usage

To use **todo-cli**, open your terminal and type `todo` followed by the desired command and options.

### Commands

- `todo add <string>`  
  Add a new to-do item to the list. Replace `<string>` with the text of your to-do.

  Example:
  ```bash
  todo add "Finish writing the report"
  ```

- `todo list`  
  List all the to-dos for the day.

  Example:
  ```bash
  todo list
  ```

- `todo tick <number>`  
  Mark a to-do as completed and remove it from the list. Replace `<number>` with the number of the to-do item.

  Example:
  ```bash
  todo tick 1
  ```

- `todo help [command]`  
  Display help for a specific command.

  Example:
  ```bash
  todo help add
  ```

### Options

- `-V, --version`  
  Output the version number of **todo-cli**.

- `-h, --help`  
  Display help for **todo-cli**.

## Examples

Add a new to-do item:
```bash
todo add "Buy groceries"
```

List all to-do items:
```bash
todo list
```

Mark a to-do item as completed:
```bash
todo tick 1
```
