const showTime = () =>{
    const newTime = new Date();
    const time = newTime.toLocalTimeString()
};

setInterval(showTime, 1000);

export {showTime};