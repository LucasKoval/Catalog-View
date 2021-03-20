//----------* REQUIRE'S *----------//


//----------* MAIN CONTROLLER *----------//
const mainController = {
    // Renderiza la vista Homepage
    index: (req, res, next) => {
        res.render('index');
    },

    // Renderiza la vista Resultado de la busqueda
    search: (req, res, next) => {
        res.render('index');
    },
};


//----------* EXPORTS CONTROLLER *----------//
module.exports = mainController;