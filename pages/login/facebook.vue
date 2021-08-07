<template>
  <div class="center">
    <vs-row justify="center" align="center">
      <vs-col justify="flex-start" align="flex-start" w="6" sm="10">
        <vs-row>
          <vs-col w="9">
            <h1 class="font-size-45 pm-0">Welcome to</h1>
            <h1 class="font-size-45 pm-0">Learn</h1>
          </vs-col>

          <vs-col
            w="3"
            justify="center"
            align="center"
            class="mt-5 mt-sm-none"
          >
            <vs-row justify="flex-end">
              <vs-button flat to="/login">
                <i class="bx bx-left-arrow-alt"></i
              ></vs-button>
              <vs-button class="px-5">Login</vs-button>
            </vs-row>
          </vs-col>
        </vs-row>

        <vs-row justify="center" align="center" class="mt-5">
          <vs-col w="6" sm="12" justify="center" align="center" class="pa-1">
            <vs-card type="4" class="card">
              <template #title>
                <h6>Facebook</h6>
              </template>

              <template #img>
                <img
                  src="/images/login-facebook.png"
                  alt="Login with Facebook"
                />
              </template>

              <template #text style="width: 100% !important">
                <p class="font-size-9">Loading...</p>
              </template>

              <template #interactions>
                <vs-button icon loading  id="btn-loading" @click="loginWithFacebook"></vs-button>
              </template>
            </vs-card>

            <p class="font-size-9 mt-5">Não tem uma conta? <a href="/register">Criar Conta</a></p>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { defineComponent, useMeta, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    useMeta({ title: "Login with Facebook" })

    onMounted(() => {
      let el = document.getElementById('btn-loading')
      setTimeout(() => {
        el.click()
      }, 2000)
    })
  },
  head: {},
  methods: {
    loginWithFacebook() {
      this.$auth.loginWith('facebook')
    }
  },
  middleware: 'noAuthenticated',
})
</script>