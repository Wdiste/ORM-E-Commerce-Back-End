const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasOne(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

ProductTag = sequelize.define('product_tag', {});

Product.belongsToMany(Tag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
