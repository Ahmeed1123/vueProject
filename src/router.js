import {createRouter, createWebHistory} from "vue-router";
import Index from "@/components/Index.vue";
import About from "@/components/About.vue";
import Posts from "@/components/Posts.vue";
import Albums from "@/components/Albums.vue";
import Album from "@/components/Album.vue";
import Members from "@/components/Members.vue";
import Post from "@/components/Post.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component:Index,
            name:"index",
        }, {
            path: '/about',
            component:About,
            name:"about",
        }, {
            path: '/posts',
            component:Posts,
            name:"posts",

        },{
            path: '/posts/:id',
            component:Post,
            name:"post",

        }, {
            path: '/albums',
            component:Albums,
            name:"albums",

        },{
            path: '/album/:id',
            component:Album,
            name:"album",

        }, {
            path: '/members',
            component:Members,
            name:"members",

        },
    ]
})