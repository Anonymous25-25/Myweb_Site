// ========================================
// TOOLS PAGE - SEARCH AND FILTER
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('toolSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach(card => {
                const toolName = card.querySelector('.tool-name').textContent.toLowerCase();
                const toolDesc = card.querySelector('.tool-description').textContent.toLowerCase();
                const toolTag = card.querySelector('.tool-tag').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || 
                    toolDesc.includes(searchTerm) || 
                    toolTag.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
