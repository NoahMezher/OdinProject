function generate_divs() {
    var e = document.body;
    for(var i = 0; i < 16; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for(var j = 1; j <= 16; j++) {
            var cell = document.createElement("div");
            cell.className = "grid_element";
            cell.innerText = "" + ((i * 16) + j);
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
    //document.getElementById("code").innerText = e.innerHTML;
}
generate_divs();