const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categorys = await Category.findAll({
      include: [
        { model: Product }
      ]
    });

    res.json(categorys);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryId = req.params.id;

  try {
    const category = await Category.findByPk(categoryId, {
      include: [
        { model: Product }
      ]
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    await category.update(req.body);
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.delete('/:id',  (req, res) => {
  // delete a category by its `id` value
  const categoryId = req.params.id;

  // Delete the category and cascade to related product records
  Category.destroy({
    where: { id: categoryId },
    cascade: true // This is a hypothetical option, actual syntax may vary based on your ORM or database setup
  })
    .then(() => {
      res.status(200).json({ message: 'Category and related products deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete category and related products' });
    });
});

module.exports = router;
