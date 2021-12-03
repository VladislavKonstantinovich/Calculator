let firstValue = document.getElementById("screen").textContent;

    document.getElementById("figures").addEventListener("click",
        function screenWrite() {
            if (event.srcElement.id == "reset") {
                document.getElementById("screen").textContent = "";
            } else if (event.srcElement.id == "back") {
                let screen = document.getElementById("screen").textContent;
                document.getElementById("screen").textContent = document.getElementById("screen").textContent.slice(
                    0, -1);
            } else {
                document.getElementById("screen").textContent += event.srcElement.id;
            }
        });
    document.getElementById("actions").addEventListener("click",
        function screenWrite() {
            alert(event.srcElement.id);
            firstValue = document.getElementById("screen").textContent;
            document.getElementById("screen").textContent = "";
        });
    document.getElementById("equals").addEventListener("click",
        function screenWrite() {
            /*
            document.getElementById("screen").textContent = parseInt(document.getElementById("screen")
                .textContent) + parseInt(firstValue);
                */
        });