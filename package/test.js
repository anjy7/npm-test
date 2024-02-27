import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

function loadEnv(stdin) {
  // Attempt to load .env file from the provided path
  const envPath = path.join(stdin, '.env');
  if (envPath) {
    dotenv.config({ path: envPath });
  } else {
    const cwdPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(cwdPath)) {
      dotenv.config({
        path: cwdPath,
      });
    }
  }

  // Check if the stdin starts with "/mnt" and construct the path accordingly
  if (stdin.startsWith("/mnt")) {
    const driveLetter = stdin.charAt(5).toUpperCase(); // Assuming the drive letter is the character after "mnt/"
    const payloadConfigPath = dotenv.config().parsed.PAYLOAD_CONFIG_PATH;
    const input = stdin.substring(6);
    // Return the concatenated path in one line
    return `${driveLetter}:${input}/${payloadConfigPath}`;
  }

  // Otherwise, join the stdin with the PAYLOAD_CONFIG_PATH and return it
  return `${stdin}${dotenv.config().parsed.PAYLOAD_CONFIG_PATH}`;
}

// Read from stdin
const stdin = fs.readFileSync(process.stdin.fd, 'utf-8').trim(); // Ensure to trim any leading/trailing whitespace

// Call the loadEnv function and store the result
const payloadConfigPath = loadEnv(stdin);

// Output the PAYLOAD_CONFIG_PATH
console.log(payloadConfigPath);