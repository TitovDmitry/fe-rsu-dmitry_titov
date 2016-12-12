function News(title, author, where) {
    this.title = title;
    this.author = author;
    this.where = where;

    this. date = new Date();
}

News.prototype.getDay = function() {
    return this.date.getDay();
}

News.prototype.getMonth = function() {
    return this.date.getMonth();
}

News.prototype.getYear = function() {
    return this.date.getFullYear();
}

News.prototype.getMinutesAgo = function() {
    var date2 = new Date();
    return date2.getMinutes() - this.date.getMinutes();
}