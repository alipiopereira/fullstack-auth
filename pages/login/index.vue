<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="10">
            <h1 class="font-size-45 pm-0">Welcome to</h1>
            <h1 class="font-size-45 pm-0">Learn</h1>
          </vs-col>

          <vs-col w="2" class="mt-5 mt-sm-none"
            ><vs-button block icon @click="test">
              Login</vs-button
            >
          </vs-col>
        </vs-row>

        <vs-row justify="center" align="center" class="mt-5">
          <vs-col w="4" sm="12" align="center" class="pa-1">
            <nuxt-link to="/login/username">
              <vs-card type="4" class="card">
                <template #title>
                  <h6 class="font-size-9">Username</h6>
                </template>
                <template #img>
                  <img
                    src="/images/login-username.png"
                    alt="Login with Username"
                  />
                </template>
                <template #text style="width: 100%">
                  <p class="font-size-6">
                    Entrar usando seus os<br />dados da sua conta,<br />como
                    nome e telefone.
                  </p>
                </template>
              </vs-card>
            </nuxt-link>
          </vs-col>

          <vs-col w="4" sm="12" align="center" class="pa-1">
            <nuxt-link to="/login/facebook">
              <vs-card type="4" class="card">
                <template #title>
                  <h6 class="font-size-9">Facebook</h6>
                </template>
                <template #img>
                  <img
                    src="/images/login-facebook.png"
                    alt="Login with Facebook"
                  />
                </template>
                <template #text style="width: 100%">
                  <p class="font-size-6">
                    Entrar usando seus os <br />
                    dados da sua conta do<br />
                    Facebook.
                  </p>
                </template>
              </vs-card>
            </nuxt-link>
          </vs-col>

          <vs-col w="4" sm="12" align="center" class="pa-1">
            <nuxt-link to="/login/google">
              <vs-card type="4" class="card">
                <template #title>
                  <h6 class="font-size-9">Google</h6>
                </template>
                <template #img>
                  <img src="/images/login-google.png" alt="Login with Google" />
                </template>
                <template #text style="width: 100%">
                  <p class="font-size-6">
                    Entrar usando seus os <br />
                    dados da sua conta do<br />
                    Google.
                  </p>
                </template>
              </vs-card>
            </nuxt-link>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { defineComponent, useMeta, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()
    useMeta({ title: "Login" })

    return { store }
  },
  head: {},
  methods: {
    test() {
      this.store.dispatch('authenticated')
    }
  }
})
</script>

<style>
.vs-card {
  width: 155px;
}

.vs-card__text {
  width: 100%;
}
</style>