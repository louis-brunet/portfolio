<template>
    <q-layout view="hHh Lpr lFf">
        <q-header bordered>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    :icon="leftDrawerOpen ? 'clear' : 'menu'"
                    class="menu_expand"
                    aria-label="Menu"
                    @click="toggleLeftDrawer"
                />
                <q-toolbar-title>
                    Curriculum Vitae | Louis Brunet
                </q-toolbar-title>

                <!--<div>Quasar v{{ $q.version }}</div>-->
                <q-separator vertical />

                <DarkModeToggle persist />

                <q-separator vertical class="q-mr-md" />

                <LocaleSelect />

                <!--<div>
                    Icons made by
                    <a href="https://www.freepik.com" title="Freepik"
                        >Freepik</a
                    >
                    from
                    <a href="https://www.flaticon.com/" title="Flaticon"
                        >www.flaticon.com</a
                    >
                </div>-->
            </q-toolbar>
        </q-header>

        <q-drawer
            :model-value="true"
            behavior="desktop"
            bordered
            :mini-to-overlay="$q.screen.lt.sm"
            :mini="!leftDrawerOpen"
        >
            <q-list separator>
                <EssentialLink
                    v-for="link in navLinks"
                    :key="link.title"
                    class="nav-link"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";
import DarkModeToggle from "components/DarkModeToggle.vue";
import LocaleSelect from "components/LocaleSelect.vue";
//import { useI18n } from "vue-i18n";

import { defineComponent, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}

const { t } = useI18n();

const navLinks = computed(() => {
    return [
        {
            title: t("home.title"),
            // caption: "Contact me!",
            icon: "home",
            link: "/",
        },
        {
            title: t("education.title"),
            icon: "school",
            link: "/education",
        },
        {
            title: t("work.title"),
            icon: "work",
            link: "/work",
        },
        // {
        //     title: this.$t("tools.title"),
        //     caption: "",
        //     icon: "code",
        //     link: "/tools",
        // },
        {
            title: t("projects.title"),
            caption: "",
            icon: "folder",
            link: "/projects",
        },
        {
            title: t("contact.title"),
            caption: "",
            icon: "email",
            link: "/contact",
        },
    ];
});

// export default defineComponent({
//     name: "Layout",

//     components: {
//         EssentialLink,
//         DarkModeToggle,
//         LocaleSelect,
//     },

//     data() {
//         const leftDrawerOpen = ref(true);

//         return {
//             leftDrawerOpen,
//             toggleLeftDrawer() {
//                 leftDrawerOpen.value = !leftDrawerOpen.value;
//             },
//         };
//     },

//     computed: {
//         navLinks() {
//             return [
//                 {
//                     title: this.$t("home.title"),
//                     // caption: "Contact me!",
//                     icon: "home",
//                     link: "/",
//                 },
//                 {
//                     title: this.$t("education.title"),
//                     icon: "school",
//                     link: "/education",
//                 },
//                 {
//                     title: this.$t("work.title"),
//                     icon: "work",
//                     link: "/work",
//                 },
//                 // {
//                 //     title: this.$t("tools.title"),
//                 //     caption: "",
//                 //     icon: "code",
//                 //     link: "/tools",
//                 // },
//                 {
//                     title: this.$t("projects.title"),
//                     caption: "",
//                     icon: "folder",
//                     link: "/projects",
//                 },
//                 {
//                     title: this.$t("contact.title"),
//                     caption: "",
//                     icon: "email",
//                     link: "/contact",
//                 },
//             ];
//         },
//     },
// });
</script>

<style lang="sass">
body.body--dark
    --toolbar-title-clr: white
    --btn-menu-clr: white
    --toolbar-bg: #{$grey-10}
    --nav-icon-clr: #{$grey-2}

body.body--light
    --toolbar-title-clr: #{$grey-8}
    --btn-menu-clr: #{$grey-8}
    --toolbar-bg: #{$grey-1}
    --nav-icon-clr: #{$grey-6}

.q-toolbar
    background-color: var(--toolbar-bg)

.q-toolbar__title
    color: var(--toolbar-title-clr)

.menu_expand
    color: var(--btn-menu-clr)

.nav-link
    .q-icon
        fill: var(--nav-icon-clr)
    &.q-router-link--active .q-icon
        fill: $primary
</style>
