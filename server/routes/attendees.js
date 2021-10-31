const express = require("express");
const router = express.Router();
const Attendees = require("../db/attendees");

router.post("/attendees", async(req, res) => {
    try {
        let attendees = await Attendees.findOne({ email: req.body.email });
        if (attendees) return res.status(400).send("Ya estas inscripto");
        const { name, surname, email, country, phone, job } = req.body;
        attendees = await Attendees.create({ name, surname, email, country, phone, job });
        res.status(200).json(attendees);
    } catch (err) {
        console.log(err);
    }
});

router.get("/attendees", async(req, res) => {
    try {
        let allAttendees = await Attendees.find({});
        res.status(200).json(allAttendees);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;
