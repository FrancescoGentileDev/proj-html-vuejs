<template>
  <div>
    <div class="d-flex justify-content-center double">
      <input type="text" name="Name" id="formName" placeholder="Name" required/>
      <input type="email" name="Email" id="formEmail" placeholder="Email" required/>
    </div>
    <div class="d-flex justify-content-center double">
      <input type="tel" name="tel" id="formtel" placeholder="Phone number" required/>
      <input type="date" name="date" id="formDate" placeholder="Pick a date" />
    </div>
    <div class="d-flex justify-content-center">
    <textarea name="description" id="" cols="30" rows="10" placeholder="write somethings"></textarea>
    </div>
    <div class="d-flex justify-content-center">
    <button>
    Make an appointment
    </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";
.double {
    gap: 1rem;
}
input, textarea {
    background-color: transparent;
    border: 1px solid $button-border-color;
    color: white !important;
    margin: 1rem 0;
    padding: 1.2rem 2rem;
    width: 100%;

}
input::placeholder {

        color: grey;
        opacity: 1;

}
input::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

button {
    background-color: $brand-color;
    color: $contrast-background;
    border:none;
    width: 100%;
    padding: 1rem
}
</style>
