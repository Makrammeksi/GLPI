const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    requesterTicket :  {
        type : String,
        required: true
    },
    assignTo :  {
        type : String,
        required: true
    },
    priority :  {
        type : String
    },
    statue :  {
        type : String
    },
    date :  {
        type : Date,
        required: true
    },
    dateLimit :  {
        type : Date ,
    },
    title :  {
        type : String,   
         required: true
    },
    discription :  {
        type : String,
        required: true
    },
    file :  {
        type : String
    }
});

module.exports = Ticket = mongoose.model("tickets", TicketSchema);


