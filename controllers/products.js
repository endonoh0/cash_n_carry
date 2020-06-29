const { Model }       = require('../models/model');
const productModel    = new Model('products');

module.exports = {

  // Display list of all ProductInstances.
  index: async (req, res) => {
    try {
      const data = await productModel.select('*');
      res.render('products', { data: data.rows });
    } catch (err) {
      res.status(200).json({ error: err.stack });
    }
  },

  // Display detail page for a specific ProductInstance.
  show: (req, res) => {
    res.send('NOT IMPLEMENTED: ProductInstance detail: ' + req.params.id);
  },

  // Display ProductInstance create form on GET.
  create: (req, res) => {
    res.render('products_new');
  },

    // Handle ProductInstance create on POST.
  store: (req, res) => {
    res.send('NOT IMPLEMENTED: ProductInstance create POST');
  },

  // Handle ProductInstance delete on POST.
  destroy: (req, res) => {
    res.send('NOT IMPLEMENTED: ProductInstance delete POST');
  },

  // Handle ProductInstance update on POST.
  update: (req, res) => {
    res.send('NOT IMPLEMENTED: ProductInstance list');
  }
}


// const addProduct = async (req, res) => {
//   const {
//     title,
//     description,
//     price,
//     quantity,
//     location,
//     cover_photo_url,
//     product_photo_url,
//     seller_id,
//     active,
//     featured,
//   } = req.body;

//   const columns = 'title, description, price, quantity, location, cover_photo_url, product_photo_url, user_id, active, featured';
//   const values = `'${title}', ${description}', ${price}', ${quantity}', ${location}', ${cover_photo_url}', ${product_photo_url}', ${seller_id}', ${active}', ${featured}'`;

//   try {
//     const data = await productModel.insert(columns, values);
//     res.status(200).json({ data: data.rows });
//   } catch (err) {
//     res.status(200).json({ error: err.stack });
//   }
// }



// module.exports = addProduct;
// module.exports = productPage;
