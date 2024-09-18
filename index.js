const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

const accordionItems = document.querySelectorAll('.accordion-item');

const icons = document.querySelectorAll('.social-icons');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContent.forEach((tabscontent) => {
      tabscontent.classList.remove('active');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active-list');
    });

    target.classList.add('active');
    tab.classList.add('active-list');
  });
});

accordionItems.forEach((item) => {
  const title = item.querySelector('.title');
  const icon = item.querySelector('.icon');
  const content = item.querySelector('.accordion-content');

  item.addEventListener('click', () => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active');
      content.style.maxHeight = null;
      title.classList.remove('active');
    } else {
      icon.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      title.classList.add('active');
    }
  });
});

// const icons = document.querySelectorAll('.icon');

// console.log(icons);

// icons.forEach((icon) => {
//   icon.addEventListener('mouseenter', function () {
//     // Scale up (pop-out)
//     this.style.transform = 'scale(1.2)';

//     // Wait for 300ms, then scale back to original size (pop-in)
//     setTimeout(() => {
//       this.style.transform = 'scale(1)';
//     }, 300); // Match this timing to CSS transition (0.3s)
//   });
// });
