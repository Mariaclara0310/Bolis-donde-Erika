const controller = {
   
    index: (req, res) => {
        return res.render('index');
    },
    registro: (req, res) => {
        return res.render('registro');
    },
    login: (req, res) => {
        return res.render('login');
    },
    listado: (req, res) => {
        let mainRouters = [
        'Erika',
        'Maria',
        'Orlando',
        'Yadira'
    ];
       res.render('listado',{'listado': mainRouters});

    },
    search: function(req, res) {
        let loQueBuscoElUsuario = req.query.search;
      let mainController = [
       {id: 1, name:'Erika'},
       {id: 2, name:'Maria'},
       {id: 3, name:'Orlando'},
       {id: 4, name:'Yadira'},
       
      ];
      let mainControllerResults = [];
    }
   
    
};

module.exports = controller;