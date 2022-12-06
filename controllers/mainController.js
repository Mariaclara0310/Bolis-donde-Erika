const controller = {
    index: (req, res) => {
        return res.render('index');
    },

    register: (req, res) => {
        return res.sen('Registro');
    },
    login: (req, res) => {
        return res.sen('Login');
    },
}

module.exports = controller;