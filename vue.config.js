const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer:{
    proxy:{
      "/webapi":{
        target:"http://bdap-cluster-05:3000",
        // target:"http://localhost:3000",
        changeOrigin:true
      }
    }
  }

})
