import Vue from "vue";
import App from "./App.vue";
import "./index.css";

// import { library } from "@fortawesome/fontawesome-svg-core";

// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { faHouseBlank } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faUserSecret, faHouseBlank);

// Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
