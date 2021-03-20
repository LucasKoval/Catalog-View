//----------* REQUIRE'S *----------//


//----------* PRODUCTS CONTROLLER *----------//
const productsController = {
    // Renderiza la vista Colección
    list: (req, res, next) => {
        res.render('index');
    },

    // Renderiza la vista Detalle de Producto
    detail: (req, res, next) => {
        res.render('index');
    },
}


//----------* EXPORTS CONTROLLER *----------//
module.exports = productsController;