const express = requiere('express');
const router = express.Router();




router.get('/', (req, res) => res.send('Route for Shop View'));
router.get('/item/:id', (req, res) => res.send('Route for find and retrieve a product from and id'));

router.post('/item/:id/add', (req, res) => res.send('Route for add de current item to the shop cart'));

router.get('/cart', (req, res) => res.send('Route for cart view'));
router.post('/cart', (req, res) => res.send('Route for get to checkout page'));



module.exports = router;



//router.get('/shop/item/:id', (req, res) => {
//    const id = req.params.id;
//    //busco la información del item con el ID de la ruta
//    
//    res.send({item})
//});