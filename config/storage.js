import { Storage } from '@google-cloud/storage';

const storage = new Storage({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
});

export default storage;