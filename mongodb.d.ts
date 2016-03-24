declare module "mongodb" {
	export interface Collection {
		findOne(filter: Object, callback: MongoCallback<any>): void;
	}
}