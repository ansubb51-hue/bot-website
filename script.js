// ======================================
// Sk1.0 WEBSITE
// ======================================


// COPY COMMAND

function copyCommand(command) {

    navigator.clipboard.writeText(command)
        .then(() => {

            showToast(command + " copied!");

        })
        .catch(() => {

            showToast("Copy failed");

        });
}


// TOAST

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);
}


// COMMAND SEARCH

const searchInput =
    document.getElementById("commandSearch");

const commands =
    document.querySelectorAll(".command");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase().trim();


    commands.forEach(command => {

        const text =
            command.innerText.toLowerCase();


        if (text.includes(search)) {

            command.style.display = "flex";

        } else {

            command.style.display = "none";

        }

    });

});


// PAGE LOAD

console.log("🤖 Sk1.0 website loaded successfully!");
