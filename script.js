if (now < miningEnd) {
    document.getElementById("miningTimer").innerText =
        format(miningEnd - now);

    document.getElementById("mineBtn").innerText = "Mining...";
    document.getElementById("mineBtn").disabled = true;

} else {

    document.getElementById("miningTimer").innerText =
        "✅ Mining Complete";

    document.getElementById("mineBtn").disabled = false;
    document.getElementById("mineBtn").innerText = "Claim 100 Coins";
}
