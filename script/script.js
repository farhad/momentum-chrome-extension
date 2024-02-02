document.addEventListener('DOMContentLoaded', function () {
    const images = ["1.jpg", "2.jpg", "3.jpg"]
    const image = images[Math.floor(Math.random() * images.length)]
    document.getElementById("image").setAttribute(
        "src",
        `./images/${image}`
    )

    var goalInput = document.getElementById("goal")
    chrome.storage.sync.get(["goal"], function (result) {
        if (result.goal) {
            goalInput.value = result.goal
        }
    });

    goalInput.addEventListener('keypress', function (e) {
        chrome.storage.sync.set({ goal: e.target.value })
    });

}, false)