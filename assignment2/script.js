const blogContainer = document.getElementById("blogContainer");
const searchInput = document.getElementById("searchInput");
const authorFilter = document.getElementById("authorFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortDate = document.getElementById("sortDate");

let blogs = [
    { title: "Debugging in JS", author: "John", category: "Tech", date: "2023-05-01" },
    { title: "Life Lessons", author: "Jane", category: "Life", date: "2023-07-15" },
    { title: "Frontend Tricks", author: "John", category: "Tech", date: "2023-03-20" },
];

let timeout;
searchInput.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(renderBlogs, 300);
});

authorFilter.addEventListener("change", renderBlogs);
categoryFilter.addEventListener("change", renderBlogs);
sortDate.addEventListener("change", renderBlogs);

function renderBlogs() {
    let filtered = blogs.filter(blog => {
        const searchTerm = searchInput.value.toLowerCase();
        const author = authorFilter.value;
        const category = categoryFilter.value;

        return (
            blog.title.toLowerCase().includes(searchTerm) &&
            (author === "" || blog.author === author) &&
            (category === "" || blog.category === category)
        );
    });

    if (sortDate.value === "new") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    blogContainer.innerHTML = "";
    filtered.forEach(blog => {
        const post = document.createElement("div");
        post.className = "blog-post";
        post.innerHTML = `<h3>${blog.title}</h3><p>Author: ${blog.author} | Category: ${blog.category} | Date: ${blog.date}</p>`;
        blogContainer.appendChild(post);
    });
}

renderBlogs();
