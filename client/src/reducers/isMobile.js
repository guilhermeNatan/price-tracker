
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
export default function (state = true, action) {
    return isMobile;
}
