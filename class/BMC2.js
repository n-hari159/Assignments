var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("inner");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "SUBMIT";
    } else {
        document.getElementById("nextBtn").innerHTML = "NEXT";
    }
    fixStepIndicator(n)
}

function NextPre(n) {
    var x = document.getElementsByClassName("inner");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("innner");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("form-content")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("form-content");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

function createInput() {
    var a = document.createElement("p");
    var b = document.createElement("input");


    if (currentTab == 2) {
        var c = document.getElementById("customersegment");
        b.setAttribute("name", "customersegment");
        b.setAttribute("placeholder", "Please enter segment details");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 3) {
        var c = document.getElementById("valueproposition");
        b.setAttribute("name", "valueproposition");
        b.setAttribute("placeholder", "Please enter your value proposition");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 4) {
        var c = document.getElementById("channels");
        b.setAttribute("name", "channels");
        b.setAttribute("placeholder", "Please provide channels info");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 5) {
        var c = document.getElementById("customerrelationships");
        b.setAttribute("name", "customerrelationships");
        b.setAttribute("placeholder", "Please provide relationship info");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 6) {
        var c = document.getElementById("revenuestreams");
        b.setAttribute("name", "revenuestreams");
        b.setAttribute("placeholder", "Please provide revenue streams info");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 7) {
        var c = document.getElementById("keyresources");
        b.setAttribute("name", "keyresources");
        b.setAttribute("placeholder", "Please provide key resources info");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 8) {
        var c = document.getElementById("keyactivities");
        b.setAttribute("name", "keyactivities");
        b.setAttribute("placeholder", "Please provide key activities details");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 9) {
        var c = document.getElementById("keypartners");
        b.setAttribute("name", "keypartners");
        b.setAttribute("placeholder", "Please enter your key partners");
        b.setAttribute("oninput", "this.className = ''");
    } else if (currentTab == 10) {
        var c = document.getElementById("coststructure");
        b.setAttribute("name", "coststructure");
        b.setAttribute("placeholder", "Please enter your cost structure");
        b.setAttribute("oninput", "this.className = ''");
    } else {
        var c = ""
    }


    a.appendChild(b);
    c.appendChild(a);
}