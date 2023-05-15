const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const stationSchema = new Schema({
name: {type:String,required:true},
status: String,
workers:[{
    type: Schema.Types.ObjectId,
    ref: "Station"
}],
created_at: {
type : Date,
default :Date.now
},
lat:{
    type: String,
    },
lon:{
    type: String,
}
})

module.exports = mongoose.model('Users', stationSchema);