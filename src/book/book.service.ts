/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";

@Injectable()   //This decorator means we service can be used in Book Module with creating object  
export class BookService {

    public books: Book[] = [];

    // add book
    addBookService(book: Book): string {
        this.books.push(book);
        return 'Book has been added';
    }

    // update book
    updateBookService(book: Book): string {
        const index = this.books.findIndex(currentBook => {
            return book.id == currentBook.id;
        })
        this.books[index] = book;
        return 'Book has successfully updated';
    }

    // delete book
    deleteBookService(bookId: string): string {
        this.books = this.books.filter(book => {
            return bookId != book.id;
        })
        return 'Book has been deleted';
    }

    // get all books
    findAllBooks(): Book[] {
        return this.books;
    }
}