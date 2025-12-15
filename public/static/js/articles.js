// Articles Page JavaScript
function toggleContent(button) {
    const article = button.closest('.article-card-full');
    const fullContent = article.querySelector('.article-full-content');
    
    if (fullContent.style.display === 'none' || !fullContent.style.display) {
        fullContent.style.display = 'block';
        button.innerHTML = '<i class="fas fa-book-reader"></i> Show Less';
    } else {
        fullContent.style.display = 'none';
        button.innerHTML = '<i class="fas fa-book-open"></i> Read Full Article';
    }
}
