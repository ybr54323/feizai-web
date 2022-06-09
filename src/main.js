import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import "./index.css";
import { List, Icon } from "vant";

const app = createApp(App);
app.use(List);
app.use(Icon);
app.use(router);
app.mount("#app");
