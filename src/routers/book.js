const express = require("express");
const router = express.Router();
const Books = require("../models/books");

//Add a new book 
router.post("/books", async (req, res) => {
   try {
      const addBook = new Books(req.body);
      await addBook.save();
      res.status(201).send(addBook);
   } catch (error) {
      res.status(400).send(error);
   }
});

//View a list of all books
router.get("/books", async (req, res) => {
   try {
      const getBooks = await Books.find({});
      res.status(200).send(getBooks);
   } catch (error) {
      res.status(400).send(error);
   }
});

//View details of a specific book by its ID
router.get("/books/:id", async (req, res) => {
   try {
      const _id = req.params.id;
      const getBook = await Books.findById(_id);
      res.status(200).send(getBook);
   } catch (error) {
      res.status(400).send(error);
   }
});

//Update a book's details
router.patch("/books/:id", async (req, res) => {
   try {
      const _id = req.params.id;
      const getBook = await Books.findByIdAndUpdate(_id, req.body, {
         new: true
      });
      res.status(200).send(getBook);
   } catch (error) {
      res.status(500).send(error);
   }
});

//Delete a book
router.delete("/books/:id", async (req, res) => {
   try {
      const _id = req.params.id;
      const deletedBook = await Books.findByIdAndDelete(_id);
      res.status(200).send(deletedBook);
   } catch (error) {
      res.status(500).send(error);
   }
});

module.exports = router;
