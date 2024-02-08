document.addEventListener('DOMContentLoaded', function() {
    // Проверка и обработка всех изображений сразу при загрузке страницы
    document.querySelectorAll('img').forEach(function(img) {
        if (!img.getAttribute('src')) {
            img.src = 'src/img/no_image.jpg';
        }
    });

    // Обработчик ошибок загрузки изображений
    document.body.addEventListener('error', function(event) {
        if (event.target.tagName === 'IMG') {
            event.target.src = 'src/img/no_image.jpg';
        }
    }, true);
});
