const { validate, Joi} = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(4).required()
    })
});


/* a funçao validate em conjunto com o Joi lançam um erro do tipo 
    ValidationError que é capturado pelo trataErroValidacao e aí dá o devido encaminhamento
*/