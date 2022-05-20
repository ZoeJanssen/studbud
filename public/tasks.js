// Book Class: Represents a Book
class Book {
    constructor(task, dueDate, completionTime, estimatedTime, taskPriority) {
      this.task = task;
      this.dueDate = dueDate;
      this.completionTime = completionTime;
      this.estimatedTime = estimatedTime;
      this.taskPriority = taskPriority;
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${book.task}</td>
        <td>${book.dueDate}</td>
        <td>${book.completionTime}</td>
        <td>${book.estimatedTime}</td>
        <td>${book.taskPriority}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
  
    static clearFields() {
      document.querySelector('#task').value = '';
      document.querySelector('#dueDate').value = '';
      document.querySelector('#completionTime').value = '';
      document.querySelector('#estimatedTime').value = '';
      document.querySelector('#taskPriority').value = '';
  
    }
  }
  
  // Store Class: Handles Storage
  class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(completionTime) {
      const books = Store.getBooks();
  
      books.forEach((book, index) => {
        if(book.completionTime === completionTime) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  // Event: Display Books
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  // Event: Add a Book
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const task = document.querySelector('#task').value;
    const dueDate = document.querySelector('#dueDate').value;
    const completionTime = document.querySelector('#completionTime').value;
      const estimatedTime = document.querySelector('#estimatedTime').value;
    const taskPriority = document.querySelector('#taskPriority').value;
  
  
      const book = new Book(task, dueDate, completionTime, estimatedTime, taskPriority);
  
      // Add Book to UI
      UI.addBookToList(book);
  
      // Add book to store
      Store.addBook(book);
  
  
  
      // Clear fields
      UI.clearFields();
  
  });
  
  // Event: Remove a Book
  document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);
  
    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  
  });