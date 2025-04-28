import { createRouter, createWebHistory } from "vue-router";
import CardView from "../views/CardView.vue";
import ListView from "../views/ListView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: CardView,
		},
		{
			path: "/list",
			name: "Nested List",
			component: ListView
		},
	],
});

export default router;
