// Read and apply .env file (this needs to be run ASAP)
import * as dotenv from 'dotenv';
dotenv.config();

import database from './database';

// Run necessary migrations
database.migrate.latest();

import './bot/index';
