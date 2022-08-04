// Utilise le fichier db.config.js pour se connecter à la base de données si la base de données n'est pas déjà créée ça la créée et si elle existe déjà, elle est utilisée.
// use the file db.config.js to connect to the database if the database is not already created, it is created and if it exists, it is used.
const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Require all models
// Récupère tous les modèles
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.posts = require("../models/posts.model.js")(sequelize, Sequelize);
db.comments = require("../models/comments.model.js")(sequelize, Sequelize);
// Relation between users and roles
// Relation entre les utilisateurs et les rôles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
// Relation between posts and users
// Relation entre les posts et les utilisateurs
db.user.hasMany(db.posts, {
  onDelete: "cascade",
});
db.posts.belongsTo(db.user, {});
// Relation between comments and users
// Relation entre les commentaires et les utilisateurs
db.comments.belongsTo(db.user, {});
db.user.hasMany(db.comments, {
  onDelete: "cascade",
});
// Relation between comments and posts
// Relation entre les commentaires et les posts
db.posts.hasMany(db.comments, {});
db.comments.belongsTo(db.posts, {});

//Rôles
db.ROLES = ["user", "admin"];
module.exports = db;
