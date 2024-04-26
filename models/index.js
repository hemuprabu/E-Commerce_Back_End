// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
    onDelete: 'CASCADE' // Cascade on delete
  }
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE' // Cascade on delete
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'productId',
  otherKey: 'tagId',
  onDelete: 'CASCADE' // Cascade on delete
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tagId',
  otherKey: 'productId',
  onDelete: 'CASCADE' // Cascade on delete
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
