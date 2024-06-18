import express from 'express';
import { BookModel } from '../models/BookModel.js';
const router = express.Router();

router.post('/books', async (req, res) => {
    try {
        const newbook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await BookModel.create(newbook);
        return res.status(201).send(book)

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
});
router.get('/books', async (req, res) => {
    try {
        const getBooks = await BookModel.find();
        return res.status(200).json({
            count: getBooks.length,
            data: getBooks
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})
router.get('/books/:id', async (req, res) => {
    try {
        const getonebook = await BookModel.findById(req.params.id);
        return res.status(200).json(getonebook);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})
router.put('/books/:id', async (req, res) => {
    try {
        const updatebook = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(updatebook);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})
router.delete('/books/:id', async (req, res) => {
    try {
        const deletebook = await BookModel.findByIdAndDelete(req.params.id);
        return res.status(200).json(deletebook);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})
export default router;