import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

//create a method
// run a method
//(async () => {}) ()

(async () => {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB CONNECTED");
    app.on("error", (err) => {
      console.log("Error:", err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on ${config.PORT}`);
    };
    app.listen(config.PORT, onListening);
  } catch (err) {
    console.log("Error", err);
    throw err;
  }
})();
