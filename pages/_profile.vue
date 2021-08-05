<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="8" xs="8" sm="10">
            <h1 class="font-size-45 pm-0">{{ username }}</h1>
            <h1 class="font-size-45 pm-0">Username</h1>
          </vs-col>

          <vs-col
            w="2"
            xs="4"
            sm="2"
            justify="center"
            align="center"
            class="mt-5 mt-sm-none"
          >
            <vs-row justify="flex-end">
              <vs-button class="px-5" @click="logout">Logout</vs-button>
            </vs-row>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { defineComponent, useRoute, useRouter, useMeta, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const username = computed(() => route.value.params.profile)

    useMeta({ title: `${"Profile: " + username.value }` })

    return { username, route, router }
  },
  head: {},
  methods: {
    logout () {
      let router = this.router
      router.push("/")
    }
  },
})
</script>