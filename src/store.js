import { reactive } from "vue";

const store = reactive({
	cards: [],
	search: "",
	selectedLevel: "",
});

export default store;
