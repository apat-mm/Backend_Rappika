const mongoose = require("mongoose")

const MONGO_URL = "mongodb+srv://Angie:Angie2004@cluster0.o3p4f0u.mongodb.net/test";

const db = async () => {
    await mongoose
        .connect(MONGO_URL)
        .then(() => console.log("DB Funcionando"))
        .catch((error) => console.log(error));
};

module.exports = db