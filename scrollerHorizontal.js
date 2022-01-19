
/**
 * 
 * @param {*} el scrollable element
 * 
 */

function scrollerHorizontal (el) {
    const isTouch = "ontouchstart" in document.documentElement;
    let offset = 0;
    let downX;
    
    const mouseMove = (e) => {
        el.classList.add("onswipe");
        el.scrollTo(-e.clientX + offset, 0);
    };

    const mouseUp = () => {
        el.classList.remove("onswipe");
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseup", mouseUp);
        el.scrollTo(el.scrollLeft, 0);
    };

    const mouseDown = (val) => {
        downX = val;
        offset = downX + el.scrollLeft;
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
        return false;
    };

    if (!isTouch) {
        el.onmousedown = (e) => mouseDown(e.clientX);
    }
};

export default scrollerHorizontal;