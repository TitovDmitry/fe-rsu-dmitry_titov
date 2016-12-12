var model = {
    tags:
        [
            new Tag("Must Read Titles", "red"),
            new Tag("Best Of List", "yellow"),
            new Tag("Classic Novels","blue"),
            new Tag("Non FIction","lilac"),
            new Tag("New Book","red")
        ],

    books:
        [
            new Book("Jewels of Nizam", "Getta Devl", 5, "covers/cover_1.png", 5, ["Must Read Titles"], 0),
            new Book("Cakes & Bakes", "Sanjeev Kapoor", 5, "covers/cover_2.png", 0, ["Must Read Titles"], 1),
            new Book("Jamie's Kitchen", "Jamie Oliver", 4.5, "covers/cover_3.png", 0, ["Non FIction"], 2),
            new Book("Inexpensive Family Meals", "Simon Holst", 4, "covers/cover_4.png", 3, ["Must Read Titles"], 3),
            new Book("Paleo Slow Cooking", "Chrissy Gower", 4.5, "covers/cover_5.png", 10, ["Non FIction", "Classic Novels"], 4),
            new Book("Cook Like an Italian", "Tobie Puttock", 4, "covers/cover_6.png", 10, ["Classic Novels"], 5),
            new Book("Suneeta Vaswani", "Getta Devl", 5, "covers/cover_7.png", 0, ["Must Read Titles"], 6),
            new Book("Jamie Does", "Jamie Oliver", 4, "covers/cover_8.png", 0, ["Classic Novels"], 7),
            new Book("Jamie's Italy", "Jamie Oliver", 5, "covers/cover_9.png", 5, ["Must Read Titles", "Best Of List"], 8),
            new Book("Vegetables Cookbook", "Matthew Biggs", 3.5, "covers/cover_10.png", 3, ["Classic Novels", "Best Of List"], 9)
        ],

    news:
        [
            new News("Jewels of Nizam", "Getta Devl", "Must Read Titles"),
            new News("Cakes & Bakes", "Sanjeev Kapoor", "Must Read Titles")
        ]
}