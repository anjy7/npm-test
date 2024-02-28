import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';


dotenv.config();

// only here to test out the go script in local dev environment
// "npm run update" will add the necessary imports and collections to this file
export default buildConfig({
  collections: []
});
