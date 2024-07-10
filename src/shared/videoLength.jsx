import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");
    return (
        <span className="absolute bottom-1 right-1 bg-black py-1 px-1 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;