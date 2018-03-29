<template>
    <v-app>
        <v-toolbar color="teal" app dark extended>
            <v-toolbar-title>
                <img width="98px" height="20.41px" style="margin-left:15px;" src="~/assets/mailgrid-logo-text.png" alt="MailGrid">
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <div style="padding:0 25px;" slot="extension">
                <v-chip color="teal lighten-1" text-color="white" :selected="false">All</v-chip>
                <v-chip color="teal lighten-1" text-color="white" :selected="false">jmurta.jm@gmail.com</v-chip>
                <v-chip color="teal lighten-1" text-color="white" :selected="false">jmurta.jm@gmail.com</v-chip>
            </div>
        </v-toolbar>
        <v-container>
            <nuxt />
        </v-container>
    </v-app>
</template>
