import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book/Book';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
    const { books } = useLoaderData();
    console.log(books);
    return (
        <div className='my-container'>
            <div className='grid gap-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    books.map(book => (
                        <Book key={book.isbn13} book={book}></Book>
                    ))
                }

            </div>

        </div>
    );
};

export default Books;