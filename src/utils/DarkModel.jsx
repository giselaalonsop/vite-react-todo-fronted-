if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'
  
  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'
  
  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')