export const actions = {
    authenticated() {
        console.log(this)
        this.$vs.notification({
            color: "danger",
            title: "😕 Opa!",
            text: `Verifique seus dados e tente novamente.`,
          });
    }
}