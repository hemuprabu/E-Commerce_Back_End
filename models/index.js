// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: false,
    onDelete: 'CASCADE' // Cascade on delete
  }
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE' // Cascade on delete
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  //otherKey: 'tagId',
  onDelete: 'CASCADE' // Cascade on delete
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
  //otherKey: 'product_id',
  onDelete: 'CASCADE' // Cascade on delete
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
