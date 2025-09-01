class LoveStory {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 6;
        this.isAnimating = false;
        this.meetDate = new Date('2023-06-15');
        
        this.init();
    }

    init() {
        this.calculateDays();
        this.bindEvents();
        this.startAutoCount();
    }

    calculateDays() {
        const today = new Date();
        const timeDiff = today.getTime() - this.meetDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        document.getElementById('totalDays').textContent = daysDiff;
        return daysDiff;
    }

    startAutoCount() {
        const daysCount = this.calculateDays();
        const numberElement = document.getElementById('daysCount');
        let currentCount = 0;
        const increment = daysCount / 100;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= daysCount) {
                currentCount = daysCount;
                clearInterval(timer);
            }
            numberElement.textContent = Math.floor(currentCount);
        }, 20);
    }

    bindEvents() {
        document.querySelectorAll('.page').forEach(page => {
            page.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.nextPage();
                }
            });
        });

        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetPage = parseInt(dot.dataset.page);
                if (targetPage !== this.currentPage) {
                    this.goToPage(targetPage);
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                this.nextPage();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevPage();
            }
        });
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.goToPage(this.currentPage + 1);
        } else {
            this.goToPage(1);
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }

    goToPage(pageNumber) {
        if (this.isAnimating || pageNumber < 1 || pageNumber > this.totalPages) {
            return;
        }

        this.isAnimating = true;
        const currentPageElement = document.getElementById(`page${this.currentPage}`);
        const targetPageElement = document.getElementById(`page${pageNumber}`);
        const currentDot = document.querySelector(`[data-page="${this.currentPage}"]`);
        const targetDot = document.querySelector(`[data-page="${pageNumber}"]`);

        currentDot.classList.remove('active');
        targetDot.classList.add('active');

        if (pageNumber > this.currentPage) {
            currentPageElement.classList.remove('active');
            currentPageElement.classList.add('prev');
            
            setTimeout(() => {
                targetPageElement.classList.add('active');
                this.currentPage = pageNumber;
                this.isAnimating = false;
            }, 400);
        } else {
            targetPageElement.classList.add('active');
            currentPageElement.classList.remove('active');
            
            setTimeout(() => {
                currentPageElement.classList.remove('prev');
                this.currentPage = pageNumber;
                this.isAnimating = false;
            }, 400);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LoveStory();
});
