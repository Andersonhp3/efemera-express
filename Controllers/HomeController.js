let express = require("express");

express = express();

const homeController = {
    index: (req,res) => {
        let banners = [
            '/imagens/moto1.jpg', 
            '/imagens/moto2.jpg'
          ];
        let servicos = [{nome: "Desenvolvimento Web", imagem: "/imagens/undraw_dev_focus.svg"},
        {nome: "Marketing Digital", imagem: "/imagens/undraw_social_dashboard.svg"},
        {nome: "Consultoria UX", imagem: "/imagens/undraw_mobile_apps.svg"}];
        res.render("index" ,{title: "Home", listaServicos: servicos, imagensBanner: banners});
    }
}

module.exports = homeController;