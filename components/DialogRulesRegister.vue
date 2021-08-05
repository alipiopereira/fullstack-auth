<template>
  <div>
    <vs-button shadow icon class="pm-0" @click="state.active = !state.active"
      >😉</vs-button
    >

    <vs-dialog width="550px" not-center v-model="state.active">
      <template #header>
        <h4 class="not-margin">Regras</h4>
      </template>

      <div class="con-content">
        <vs-row>
          <vs-col w="12" justify="center">
            <vs-row justify="center" align="center">
              <vs-col w="2" align="center">
                <vs-button danger icon class="pm-0"><i class="bx bx-user"></i></vs-button>
              </vs-col>

              <vs-col w="10">
                <p class="font-size-9">
                  Username: Todos os caracteres devem ser minúsculos | Mínimo de caracteres 3 | Mínimo de caracteres 12
                </p>
              </vs-col>
            </vs-row>

            <vs-row justify="center" align="center" class="mt-1">
              <vs-col w="2" align="center">
                <vs-button danger icon class="pm-0"><i class="bx bx-mail-send"></i></vs-button>
              </vs-col>
              <vs-col w="10">
                <p class="font-size-9">E-mail: Informe um email válido | Verifique se seu email já está cadastrado</p>
              </vs-col>
            </vs-row>

            <vs-row justify="center" align="center" class="mt-1">
              <vs-col w="2" align="center">
                <vs-button danger icon class="pm-0"><i class="bx bx-hide"></i></vs-button>
              </vs-col>
              <vs-col w="10">
                <p class="font-size-9">Password: Pode fazer uso tanto de letras como de números | Mínimo de caracteres 6 | Mínimo de caracteres 10 | Confirme sua senha</p>
              </vs-col>
            </vs-row>
          </vs-col>
        </vs-row>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      active: false,
    });

    return { state };
  },
});
</script>