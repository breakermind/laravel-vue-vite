<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
	<header>
		<img
			alt="Vue logo"
			class="logo"
			src="/public/svg/logo.svg"
			width="125"
			height="125"
		/>

		<div class="wrapper">
			<HelloWorld msg="You did it!" />

			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/params/123/HELLO">Params</RouterLink>
				<RouterLink to="/map">Map</RouterLink>
				<RouterLink to="/lang">Lang</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

a,
.green {
	text-decoration: none;
	color: hsla(160, 100%, 37%, 1);
	transition: 0.4s;
}

@media (hover: hover) {
	a:hover {
		background-color: hsla(160, 100%, 37%, 0.2);
	}
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: hsla(160, 100%, 37%, 1);
	background: hsla(160, 100%, 37%, 0.06);
	font-weight: bold;
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	margin: 1rem 5px;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	body {
		display: flex;
		place-items: center;
	}

	#app {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 2rem;
	}

	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
