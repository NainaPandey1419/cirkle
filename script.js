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

    const navTabs = document.querySelector('.nav-tabs');
    const navItems = navTabs.querySelectorAll('.nav-item:not(.ms-auto):not(.dropdown)');
    const slidingUnderline = document.createElement('div');
    slidingUnderline.classList.add('sliding-underline');
    navTabs.appendChild(slidingUnderline);

    function updateUnderline(target) {
      slidingUnderline.style.width = `${target.offsetWidth}px`;
      slidingUnderline.style.left = `${target.offsetLeft}px`;
    }

    function createLoader() {
      const loader = document.createElement('div');
      loader.classList.add('loader');
      return loader;
    }

    const contentCard = document.querySelector('.card.text-light');

    navItems.forEach(item => {
      const loader = createLoader();
      item.appendChild(loader);

      item.addEventListener('click', function(e) {
        e.preventDefault();
        navItems.forEach(navItem => {
          navItem.querySelector('.nav-link').classList.remove('active');
          navItem.querySelector('.loader').style.display = 'none';
        });
        this.querySelector('.nav-link').classList.add('active');
        updateUnderline(this);
        this.querySelector('.loader').style.display = 'block';
        contentCard.style.display = 'none';

        setTimeout(() => {
          this.querySelector('.loader').style.display = 'none';
          contentCard.style.display = 'block';
          console.log(this.querySelector('.nav-link').textContent.trim());
        }, 2000);
      });
    });

    const activeItem = navTabs.querySelector('.nav-link.active').parentElement;
    updateUnderline(activeItem);
  });