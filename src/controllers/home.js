const HomeController = {
    
    index: (req, res) => {
        res.json({ message: "Gama Buster API", version: "1.0.0" });
    },
};
    

module.exports = HomeController;

