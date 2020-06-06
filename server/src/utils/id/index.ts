import ObjectID from 'bson-objectid';

export const id_gen = () => ObjectID.generate();

export const id_check = (id: string) => ObjectID.isValid(id);

export default id_gen;