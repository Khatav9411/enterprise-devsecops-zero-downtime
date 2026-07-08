require('dotenv').config();

module.exports = {

    // app:{

    //     name:process.env.APP_NAME || "Enterprise DevSecOps",

    //     version:process.env.APP_VERSION || "1.0.0",

    //     env:process.env.NODE_ENV || "development",

    //     port:process.env.PORT || 3000

    // },

    // database:{

    //     host:process.env.DB_HOST,

    //     port:process.env.DB_PORT,

    //     user:process.env.DB_USER,

    //     password:process.env.DB_PASSWORD,

    //     database:process.env.DB_NAME

    // }

    
    app: {
      port: process.env.PORT || 3000,
      env: process.env.NODE_ENV || "development",
    },

    db: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
};

