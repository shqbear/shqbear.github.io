// 图片和视频数据
const mediaItems = [
    // 图片数据
    { type: 'image', url: 'imgs/微信图片_20260103115750_2_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115751_5_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115752_7_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115753_8_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115754_9_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115755_10_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115757_11_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115758_12_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115759_14_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115800_16_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115802_17_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115804_18_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115805_19_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115807_20_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115808_22_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115810_23_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115815_24_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115825_25_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115832_27_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115835_28_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115836_29_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115840_31_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115842_32_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115844_33_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115852_34_8.jpg', alt: '金色纸制品展示' },
    { type: 'image', url: 'imgs/微信图片_20260103115858_35_8.jpg', alt: '金色纸制品展示' },
    
    // 视频数据
    { type: 'video', url: 'videos/微信视频2026-01-03_115948_488.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_115957_969.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_120016_023.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_120145_436.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_120203_467.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_120259_395.mp4', alt: '金色纸制品视频展示' },
    { type: 'video', url: 'videos/微信视频2026-01-03_120349_225.mp4', alt: '金色纸制品视频展示' }
];

// DOM 元素
const galleryContainer = document.querySelector('.gallery-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// 初始化函数
function init() {
    renderGallery();
    setupEventListeners();
}

// 渲染画廊
function renderGallery(items = mediaItems) {
    galleryContainer.innerHTML = '';
    
    items.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.type}`;
        
        let mediaElement;
        if (item.type === 'image') {
            mediaElement = document.createElement('img');
            // 懒加载图片
            mediaElement.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="0 0 300 250"%3E%3Crect width="300" height="250" fill="%23f0f0f0"%3E%3C/rect%3E%3Ctext x="150" y="125" font-size="16" text-anchor="middle" fill="%23999" dy=".3em"%3E加载中...%3C/text%3E%3C/svg%3E';
            mediaElement.setAttribute('data-src', item.url);
            mediaElement.alt = item.alt;
            mediaElement.addEventListener('click', () => openModal(item.url, item.alt));
        } else {
            mediaElement = document.createElement('video');
            mediaElement.setAttribute('data-src', item.url);
            mediaElement.controls = true;
            mediaElement.alt = item.alt;
        }
        
        galleryItem.appendChild(mediaElement);
        galleryContainer.appendChild(galleryItem);
    });
    
    // 触发懒加载
    lazyLoad();
    
    // 添加滚动事件监听
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
}

// 懒加载函数
function lazyLoad() {
    const lazyElements = document.querySelectorAll('img[data-src], video[data-src]');
    
    lazyElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight + 100) {
            // 元素进入视口
            if (element.tagName === 'IMG') {
                element.src = element.getAttribute('data-src');
            } else if (element.tagName === 'VIDEO') {
                element.src = element.getAttribute('data-src');
            }
            element.removeAttribute('data-src');
        }
    });
    
    // 如果所有元素都已加载，移除事件监听
    if (document.querySelectorAll('img[data-src], video[data-src]').length === 0) {
        window.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 筛选按钮事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新活动状态
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 获取筛选类型
            const filter = btn.dataset.filter;
            
            // 筛选并渲染
            if (filter === 'all') {
                renderGallery();
            } else if (filter === 'images') {
                const filtered = mediaItems.filter(item => item.type === 'image');
                renderGallery(filtered);
            } else if (filter === 'videos') {
                const filtered = mediaItems.filter(item => item.type === 'video');
                renderGallery(filtered);
            }
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', closeModal);
    
    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// 打开图片查看器
function openModal(imgUrl, altText) {
    modal.style.display = 'block';
    modalImg.src = imgUrl;
    captionText.textContent = altText;
}

// 关闭图片查看器
function closeModal() {
    modal.style.display = 'none';
    // 清空图片源，释放内存
    modalImg.src = '';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);