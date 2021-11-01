import axios from "axios";

const postAttendee = async(attendee) => {
    try {
        const newAttendee = await axios.post(`${process.env.REACT_APP_API_URL}/api/attendees`, attendee);
        return newAttendee; 
    }
    catch (err) {
        console.log(err)
    }
};

export {
    postAttendee,
};
