import dotenv from 'dotenv';
dotenv.config();

const { JWT_SECRET, MONGODB_URI } = process.env;

export const validateEnv = () => {
  const required = ['MONGODB_URI', 'JWT_SECRET'];
  required.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required env variable: ${key}`);
    }
  });
}; 