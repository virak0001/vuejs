<template>
  <v-form v-model="valid">
    <v-container>
      <h1 class="text-center">{{ formTitle }}</h1>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Name"
            v-model="users.name"
            outlined
            :rules="[required('name')]"
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Email"
            v-model="users.email"
            :rules="[required('email'), emailFormat()]"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Mobile"
            outlined
            type="number"
            v-model="users.mobile"
            :rules="[
              required('name'),
              minLength('name', 5),
              maxLength('name', 25)
            ]"
            dense
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="City"
            v-model="users.city"
            outlined
            :rules="[
              required('city'),
              minLength('city', 5),
              maxLength('city', 25)
            ]"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="my-2">
        <v-btn color="blue" @click="saveUser" :disabled="!valid">{{
          buttonText
        }}</v-btn>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import validations from "@/utils/validations";
export default {
  props: ["users", "buttonText", "formTitle"],
  name: "ExploreEvent",
  methods: {
    saveUser() {
      this.$emit("save:user");
    }
  },
  data() {
    return {
      valid: false,
      ...validations
    };
  }
};
</script>
