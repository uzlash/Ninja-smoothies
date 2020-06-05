import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/components/Index";
import AddSmoothie from "@/components/AddSmoothie";
import EditSmoothie from "@/components/EditSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: EditSmoothie
  }
];

const router = new VueRouter({
  routes
});

export default router;
