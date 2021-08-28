const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
import refs from "./refs";
export default function setupThemeSwither() {
  refs.themeSwitcher.addEventListener('click', onThemeSwitcherClick);
  setThemeSwitch(localStorage.getItem('theme'));
}

function onThemeSwitcherClick(event) {
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    setThemeSwitch(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    setThemeSwitch(Theme.LIGHT);
  }
}

function setThemeSwitch(theme) {
  if (theme === Theme.DARK) {
    refs.themeSwitcher.checked = true;
    refs.body.classList.add('dark-theme');
    refs.body.classList.remove('light-theme');
  } else {
    refs.themeSwitcher.checked = false;
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
  }
}