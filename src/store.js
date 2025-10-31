import {createStore} from "vuex";

export const store = createStore({
    state() {
        return {
            app_title: 'التطبيق النهائي',
            randomNumber: (start , end) => {
                return Math.floor(Math.random() * end) + start;
            },
            randomImage:  function(start,end ,path = 'posts' ,ext = 'png') {
                return `public/${path}/${this.randomNumber(start,end)}.${ext}`;
            }
        }
    }
})
