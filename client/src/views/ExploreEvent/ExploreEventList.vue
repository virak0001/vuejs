<template>
  <div class="ExploreEventList">
    <v-container>
      <v-data-table
        :headers="headers"
        :items="user.users"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editUser(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteUser(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
    <ExploreEvent
      :users="form"
      @save:user="saveUser"
      buttonText="Save User"
      :formTitle="title"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
import ExploreEvent from "@/components/ExploreEvent/ExploreEvent.vue";
export default {
  name: "ExploreEventList",
  data() {
    return {
      form: {},
      errors: {},
      title: "Create New User",
      editUserItem: {},
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Email", value: "email" },
        { text: "Mobile", value: "mobile" },
        { text: "City", value: "city" },
        { text: "Action", value: "actions" }
      ]
    };
  },
  computed: {
    ...mapState(["user"])
  },
  components: {
    ExploreEvent
  },
  methods: {
    //   Create new user
    async saveUser() {
      if (this.form._id == undefined) {
        await this.$store.dispatch("user/create", this.form);
        console.log(this.form);
        this.form = {};
      } else {
        await this.$store.dispatch("user/edit", this.form);
        this.title = "Create New User";
        this.form = {};
      }
    },

    // Edit user information
    async editUser(user) {
      this.title = "Edit User Information";
      this.form = user;
    },

    // delete user
    async deleteUser(user) {
      let response = confirm(`Are you sure you want to delete ${user.name}`);
      if (response) this.$store.dispatch("user/delete", user);
    }
  },

  async mounted() {
    await this.$store.dispatch("user/getUser");
  }
};
</script>
