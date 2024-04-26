const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        { model: Product }
      ]
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagId = req.params.id;
  try {
    const tag = await Tag.findByPk(tagId, {
      include: [
        { model: Product }
      ]
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    await tag.update(req.body);
    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.delete('/:id',  (req, res) => {
  // delete on tag by its `id` value
  const tagId = req.params.id;

  // Delete the tag and cascade to related product_tag records
  Tag.destroy({
    where: { id: tagId },
    cascade: true // This is a hypothetical option, actual syntax may vary based on your ORM or database setup
  })
    .then(() => {
      res.status(200).json({ message: 'Tag and related product tags deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to delete tag and related product tags' });
    });
});

module.exports = router;
