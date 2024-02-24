import Book from "../models/bookModel.js";

const bookController = {
    create: async (req, res) => {
        try {
            const book = new Book(req.body);
            await book.save();
            res.status(201).json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getAll: async (req, res) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            res.json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    update: async (req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            res.json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    delete: async (req, res) => {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

export default bookController;
