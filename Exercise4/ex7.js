function swapTBodyRowsOnCilck() {
    let tBody = document.getElementsByTagName("tbody")[0];
    tBody.insertBefore(tBody.childNodes[1],tBody.childNodes[0]);
}