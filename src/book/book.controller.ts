/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";


@Controller('book')
export class BookController {

    public constructor(private bookService: BookService) { }

    @Post('/addBook')
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }

    @Put('/update')
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Get('/findAllBooks')
    getAllBooks(): Book[] {
        return this.bookService.findAllBooks();
    }

    @Delete('/delete/:id')
    deleteBook(@Param('id') bookId: string): string {
        return this.bookService.deleteBookService(bookId);
    }
}