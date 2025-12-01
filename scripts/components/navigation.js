export function navigation() {
    return `
        <nav class="navbar">
            <div class="nav-container">
                <a href="/" class="nav-link" data-path="/">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/Weather" class="nav-link" data-path="/Weather">
                    <i class="fas fa-cloud-sun"></i>
                    <span>Weather</span>
                </a>
                <a href="/Crypto" class="nav-link" data-path="/Crypto">
                    <i class="fas fa-chart-line"></i>
                    <span>Crypto</span>
                </a>
            </div>
        </nav>
    `;
}

export function initNavigation() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-path') === currentPath) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}