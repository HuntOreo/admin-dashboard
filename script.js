const themeBtns = document.querySelectorAll('.theme');
const darkBtn = document.querySelector('#dark-btn');
const lightBtn = document.querySelector('#light-btn');

function updateTheme(current, toSwap, body) {
  body.classList.toggle(current);
  body.classList.toggle(toSwap);
}

themeBtns.forEach(button => {
  button.addEventListener('click', () => {
    const body = document.querySelector('body');
    const lightFlag = body.classList.contains('light');
    const darkFlag = body.classList.contains('dark');

    if (lightFlag) {
      lightBtn.classList.toggle('hide-theme');
      darkBtn.classList.toggle('hide-theme');
      updateTheme('light', 'dark', body);
    }

    if (darkFlag) {
      darkBtn.classList.toggle('hide-theme');
      lightBtn.classList.toggle('hide-theme');
      updateTheme('dark', 'light', body);
    }
  });
})