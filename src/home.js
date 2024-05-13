function loadHome() {
    let content = document.getElementById('yourElementId');
    content.innerHTML = '<h1>Welcome to Henrys Pizza Shop</h1><p>This is the home page</p>';
    return content;
}

export {
    loadHome
};