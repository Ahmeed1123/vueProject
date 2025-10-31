<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

// استيراد الأيقوانات كعناصر Vue
import {
  AccidentIcon,
  AlphabetBanglaIcon,
  Home03Icon,
  PaypalIcon,
  PencilIcon,
  PlateIcon,
  SearchIcon,
  ServerStack01Icon,
  StarsIcon
} from "@hugeicons/core-free-icons";

type MenuItem = {
  label: string;
  icon?: any;
  route?: string;
  url?: string;
  target?: string;
  items?: MenuItem[];
};

const items = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: Home03Icon, // استخدام الأيقونة كمكون
    route: '/',
  },
  {
    label: 'About',
    icon: AlphabetBanglaIcon,
    route: '/about',
  },
  {
    label: 'Posts',
    icon: PencilIcon,
    route: '/posts',
  },
  {
    label: 'Albums',
    icon: ServerStack01Icon,
    route: '/albums',
  },
  {
    label: 'Members',
    icon: StarsIcon,
    route: '/members',
  }
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link
            v-if="item.route"
            v-slot="{ href, navigate, isExactActive }"
            :to="item.route"
            custom
        >
          <a
              v-ripple
              :href="href"
              v-bind="props.action"
              @click="navigate"
              :class="{ 'active-menu-item': isExactActive }"
          >
            <!-- عرض الأيقونة كمكون -->
            <component v-if="item.icon" :is="item.icon" class="menu-icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
        >
          <component v-if="item.icon" :is="item.icon" class="menu-icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </div>
  <div class="max-w-[1200px] px-2 mx-auto w-full">
    <router-view />
  </div>
  <Button>test</Button>
</template>

<style scoped>
.active-menu-item {
  background-color: #3b82f6 !important;
  color: white !important;
  border-radius: 6px;
}

.menu-icon {
  width: 1.2rem;
  height: 1.2rem;
}

:deep(.p-menubar .p-menuitem-link) {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>