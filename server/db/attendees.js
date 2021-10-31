const mongoose = require("mongoose");

const attendeesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+@.+..+/,
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    job: {
        type: String,
        required: true
    }
});

const Attendees = mongoose.model("Attendees", attendeesSchema);

module.exports = Attendees;
