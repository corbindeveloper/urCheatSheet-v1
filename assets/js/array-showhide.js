// Tabs for the array dashboard 

// Show Selection Sort
function selectionSortTab() {
    var x = document.getElementById("selectionSortDropdown");
    var a = document.getElementById("insertionSortDropdown")
    var b = document.getElementById("mergeSortDropdown");
    var c = document.getElementById("quickSortDropdown");

    var selectiontab = document.getElementById("selection-sort-tab-id");
    var insertiontab = document.getElementById("insertion-sort-tab-id");
    var mergetab = document.getElementById("merge-sort-tab-id");
    var quicktab = document.getElementById("quick-sort-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

        selectiontab.classList.add('active-tab');
        insertiontab.classList.remove('active-tab');
        mergetab.classList.remove('active-tab');
        quicktab.classList.remove('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }
}

function dropSelectionSortAlgos() {
    var x = document.getElementById("selection-sort-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none;";
    }
}
text 


// Show Insertion Sort
function insertionSortTab() {
    var x = document.getElementById("insertionSortDropdown");
    var a = document.getElementById("selectionSortDropdown")
    var b = document.getElementById("mergeSortDropdown");
    var c = document.getElementById("quickSortDropdown");

    var selectiontab = document.getElementById("selection-sort-tab-id");
    var insertiontab = document.getElementById("insertion-sort-tab-id");
    var mergetab = document.getElementById("merge-sort-tab-id");
    var quicktab = document.getElementById("quick-sort-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

        selectiontab.classList.remove('active-tab');
        insertiontab.classList.add('active-tab');
        mergetab.classList.remove('active-tab');
        quicktab.classList.remove('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }

}

function dropInsertionSortAlgos() {
    var x = document.getElementById("insertion-sort-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


// Show Merge Sort
function mergeSortTab() {
    var x = document.getElementById("mergeSortDropdown");
    var a = document.getElementById("selectionSortDropdown")
    var b = document.getElementById("insertionSortDropdown");
    var c = document.getElementById("quickSortDropdown");

    var selectiontab = document.getElementById("selection-sort-tab-id");
    var insertiontab = document.getElementById("insertion-sort-tab-id");
    var mergetab = document.getElementById("merge-sort-tab-id");
    var quicktab = document.getElementById("quick-sort-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

        selectiontab.classList.remove('active-tab');
        insertiontab.classList.remove('active-tab');
        mergetab.classList.add('active-tab');
        quicktab.classList.remove('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }

}

function dropMergeSortAlgos() {
    var x = document.getElementById("merge-sort-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


// Show Quick Sort
function quickSortTab() {
    var x = document.getElementById("quickSortDropdown");
    var a = document.getElementById("selectionSortDropdown")
    var b = document.getElementById("insertionSortDropdown");
    var c = document.getElementById("mergeSortDropdown");

    var selectiontab = document.getElementById("selection-sort-tab-id");
    var insertiontab = document.getElementById("insertion-sort-tab-id");
    var mergetab = document.getElementById("merge-sort-tab-id");
    var quicktab = document.getElementById("quick-sort-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

        selectiontab.classList.remove('active-tab');
        insertiontab.classList.remove('active-tab');
        mergetab.classList.remove('active-tab');
        quicktab.classList.add('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }

}

function dropQuickSortAlgos() {
    var x = document.getElementById("quick-sort-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


// ===================================================================================
// ===================================================================================

// Show Linear Search
function linearSearchTab() {
    var x = document.getElementById("linearSearchDropdown");
    var a = document.getElementById("binarySearchDropdown")

    var binarytab = document.getElementById("binary-search-tab-id");
    var lineartab = document.getElementById("linear-search-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        // b.style.display = "none";
        // c.style.display = "none";

        binarytab.classList.remove('active-tab');
        lineartab.classList.add('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }
}

function dropLinearSearchAlgos() {
    var x = document.getElementById("linear-search-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


// Show Binary Search
function binarySearchTab() {
    var x = document.getElementById("binarySearchDropdown");
    var a = document.getElementById("linearSearchDropdown")

    var binarytab = document.getElementById("binary-search-tab-id");
    var lineartab = document.getElementById("linear-search-tab-id");


    if (x.style.display !== "block") {
        x.style.display = "block";
        a.style.display = "none";
        // b.style.display = "none";
        // c.style.display = "none";

        binarytab.classList.add('active-tab');
        lineartab.classList.remove('active-tab');

        console.log("x is flex");
    } else {
        x.style.display = "none";
    }
}

function dropBinarySearchAlgos() {
    var x = document.getElementById("binary-search-table");
    if (x.style.display !== "flex") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}


