function func(sColor1, sColor2) {
    let pTags = document.getElementsByTagName("p");
    let headertitleClassElements = document.getElementsByClassName("headertitle");
    document.title = `${pTags.length} параграфа, ${headertitleClassElements.length} елемента с клас "headertitle"`

    for (i = 0; i < pTags.length; i++) {
        pTags[i].style.backgroundColor = sColor1;
    }

    for (i = 0; i < headertitleClassElements.length; i++) {
        headertitleClassElements[i].style.backgroundColor = sColor2;
    }
}

func("blue", "green");