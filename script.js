document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();

    if (query !== "") {
        // Open DuckDuckGo search in a new tab
        window.open("https://duckduckgo.com/?q=" + encodeURIComponent(query), "_blank");
        // Optional: clear the input
        document.getElementById("searchInput").value = "";
    }
});
