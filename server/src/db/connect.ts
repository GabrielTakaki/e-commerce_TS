import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';

const connect = () => {
  const dbUri = config.get('dbUri') as string;

  return mongoose.connect(dbUri)
    .then(() => {
      log.info(`Connected to ${dbUri}`);
    })
    .catch((err) => {
      log.error(`Failed to connect to ${dbUri}`, err);
      process.exit(1);
    });
}

export default connect;
