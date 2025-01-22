
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const entity1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String }
})

const entity1Model = mongoose.model('entity1', entity1Schema, 'entity1');
export default entity1Model;
