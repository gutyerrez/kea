import { Collection } from 'mongoose';

export type MongoCollection<T> = Collection<T & { _id: string }>
