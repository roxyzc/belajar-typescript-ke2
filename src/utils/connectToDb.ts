import mongoose from 'mongoose';
import log from './logger';

async function connectToDb(url: string) {
    const dbUrl = url;
    try {
        await mongoose.connect(dbUrl);
        log.info('Connect to db');
    } catch (error) {
        process.exit(1);
    }
}

export default connectToDb;
