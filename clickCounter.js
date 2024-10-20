// clickCounter.js
const clickCounter = (maxClicks) => {
    let clicks = 0;
    return () => {
        if (clicks < maxClicks) {
            clicks++;
            return true; // Still can click
        } else {
            return false; // Max clicks reached
        }
    };
};

export default clickCounter;
