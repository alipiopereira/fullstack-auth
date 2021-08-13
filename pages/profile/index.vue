<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="center"  w="6" sm="10">
        <vs-card type="4">
          <template #title>
            <h3>Profile</h3>
          </template>
          <template #img>
            <img src="/images/card-profile-logo-project.png" alt="" />
          </template>
          <template #text>
            <span
              ><h4>Username:</h4>
              {{ $auth.user.name }}</span
            >
            <h4 class="align-start" v-if="$auth.user.email">Email:</h4>
            {{ $auth.user.email }}
            <p>Vamos pra cima, avançando juntos nessa caminha...</p>
          </template>
          <template #interactions>
            <vs-button danger icon @click="logout">
              <i class="bx bx-log-out"></i>
              Logout
            </vs-button>
            <vs-avatar size="35">
              <img :src="$auth.user.picture" alt="FullStackBeta Auth Logo" />
            </vs-avatar>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    //const route = useRoute()
    //const username = computed(() => route.value.params.profile)
    //useMeta({ title: `${"Profile: " + username.value }` })
    //return { username }
  },
  head: {},
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
  middleware: "authenticated",
});
</script>