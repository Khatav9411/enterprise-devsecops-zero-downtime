const app=require("./app");

const config=require("./config/config");

const logger=require("./config/logger");

app.listen(config.app.port,()=>{

    logger.info(`

=========================================
 Enterprise DevSecOps API Started
=========================================
 Environment : ${config.app.env}
 Port        : ${config.app.port}
=========================================

`);

});