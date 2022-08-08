const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

//verifie si l'email est unique
//verify if the email is unique
checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Email
    user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      return res.status(400).send({
        message: "Échec ! L'email est déjà utilisé !",
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

//verifie si le role existe
//verify if the role exists
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Échec ! Le rôle n'existe pas = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};
//exporte les fonctions
//export the functions
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
