function Book(title, author, stars, cover, price, tags, id) {
    this.title = title;
    this.author = author;
    this.stars = stars;
    this.cover = cover;
    this.visible = true;
    this.price = price;
    this.tags = tags;
    this.id = id;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

Book.prototype.getStars = function() {
    return this.stars;
}

Book.prototype.getCover = function() {
    return this.cover;
}

Book.prototype.getVisible = function() {
    return this.visible;
}

Book.prototype.getPrice = function() {
    return this.price;
}

Book.prototype.setVisibleON = function(){
    this.visible = true;
}

Book.prototype.setVisibleOFF = function(){
    this.visible = false;
}

Book.prototype.getId = function() {
    return this.id;
}