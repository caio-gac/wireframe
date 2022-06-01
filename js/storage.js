function store(item_ids) {
    var items = [];
    for(var i = 0; i < item_ids.length; i++) {
        items.push(item_ids[i]);
    }
    localStorage.setItem("item", JSON.stringify(items));
}
