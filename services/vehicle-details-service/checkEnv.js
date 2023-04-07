const dotenv = require("dotenv");
const requiredEnvironmentVariables = require("./required-envs.json");

dotenv.config();

function checkEnvs() {
  for (let variable of requiredEnvironmentVariables) {
    if (!process.env[variable]) {
      const error = variable + " not defined in .env file";
      throw new Error(error);
    }
  }
}

module.exports = checkEnvs;
