// informando que a const será um objeto
const HomeController = {
    sayHello: (req, res) => {
        const { name } = req.query;
    
        res.send(`Hello ${name || "World"}`);
    }
};

// forma de exportar módulos, quando for feito esse split de arquivos. 
module.exports = HomeController;