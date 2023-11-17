import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.DB_URI as string);

    server = app.listen(config.PORT, () => {
      console.log(`[server:${config.PORT}] is running.`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
