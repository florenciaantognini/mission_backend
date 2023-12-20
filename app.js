const express = requiere ('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shoproutes');
const adminRoutes = require('./src/routes/adminroutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 4000 en http://localhost:${PORT}")});