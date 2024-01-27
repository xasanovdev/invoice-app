import { ref } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;

    document.documentElement.classList.toggle('dark', isDarkMode.value);

    localStorage.setItem('darkMode', isDarkMode.value.toString());
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
