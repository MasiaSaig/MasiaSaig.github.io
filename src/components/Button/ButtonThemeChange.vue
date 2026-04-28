<template>
  <div>
    <input class="peer sr-only" id="theme" type="checkbox" @click="switchTheme()" />
    <label for="theme" class="theme-toggle" data-light="light" data-dark="dark">
      <svg id="light" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
      </svg>

      <svg id="dark" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
      </svg>
    </label>
  </div>
</template>

<script setup lang="ts">
const theme = ref<string>("light");

/**
 * Determines if the user has a set theme
 */
function detectColorScheme(){
  // Local storage is used to override OS theme settings
  if(localStorage.getItem("theme")){
    if(localStorage.getItem("theme") == "dark"){
      theme.value = "dark";
    }
  } else if(!window.matchMedia) {
    // MatchMedia method not supported
    return false;
  } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // OS theme setting detected as dark
    theme.value = "dark";
  }

  // Dark theme preferred, set document with a `data-theme` attribute
  if (theme.value === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

/**
 * Changes the theme, and sets a localStorage variable to track the theme between page loads
 */
function switchTheme() {
  if (theme.value !== "dark") {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    theme.value = 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    theme.value = 'light';
  }
}

onMounted(() => {
  detectColorScheme();
})
</script>

<style lang="scss">
[data-theme="dark"] {
	--theme-toggle-light-scale: 1;
	--theme-toggle-dark-scale: 0;
	--theme-toggle-rotate: 1turn;
}
</style>
<style lang="css" scoped>
.theme-toggle {
	position: relative;
	display: grid;
	place-items: center;
	transition: outline 150ms ease-in-out;
	cursor: pointer;
	border-radius: 50%;
	color: var(--color-text);
}
.theme-toggle > svg {
	grid-area: 1/1;
	transition: scale 300ms ease-in-out, rotate 500ms ease-in-out;
	width: 100%;
	height: 100%;
	scale: var(--theme-toggle-dark-scale, 1);
	rotate: var(--theme-toggle-rotate, 0turn);
}
.theme-toggle > svg:first-child {
	scale: var(--theme-toggle-light-scale, 0);
}
</style>