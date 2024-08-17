document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.post-image').forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedValue = this.getAttribute('data-value');
            dropdownToggle.textContent = selectedValue;
        });
    });

    const reactionBtn = document.querySelector('.reaction-btn');
    reactionBtn.addEventListener('click', function(e) {
        e.preventDefault();
    });

    const likesModalCloseBtn = document.querySelector('#likesModal .close');
    likesModalCloseBtn.addEventListener('click', function() {
        const likesModal = document.getElementById('likesModal');
        const bootstrapModal = bootstrap.Modal.getInstance(likesModal);
        bootstrapModal.hide();
    });
});