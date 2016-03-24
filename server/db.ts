import * as assert from 'assert';
import { MongoClient, Db } from 'mongodb';

let url = 'mongodb://localhost:27017/hmc';
export var db: Db;

export var connect = (callback: (db: Db) => void) => {
	MongoClient.connect(url, (err, _db) => {
		assert.equal(null, err);

		db = _db;
		return callback(_db);
	})
};