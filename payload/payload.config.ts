import user from "../collections/user";
import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from '../collections/Page';
import Media from '../collections/Media';
import Products from '../collections/Products';
import Colors from '../collections/Colors';
import Sizes from '../collections/Sizes';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [user,
    Media,
    Products,
    Colors,
    Sizes,
    Page
  ],
});
