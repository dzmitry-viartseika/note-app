<template>
    <div class="sidebar">
      <div v-if="notes.length">
        <note-template v-for="note in notes"
                       :note="note"
                       :key="note.title"
        />
      </div>
      <div class="sidebar__content"
           v-else
      >
        Boo, no notes. Get writing!
      </div>
      <div class="sidebar__content">
        <a href="#"
           @click="cleanCurrentNote()"
        >Start a new note</a>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import noteTemplate from './noteTemplate.vue';

export default {
  name: 'sideBarTemplate',
  components: {
    noteTemplate,
  },
  computed: {
    ...mapGetters(['notes']),
  },
  methods: {
    ...mapActions(['cleanCurrentNote']),
  },
};
</script>

<style scoped lang="scss">
  .sidebar {
    background: #f9f9f9;
    flex: 1;
    height: 100%;
    max-width: 28%;
    border-right: 2px solid #eee;
    &__content {
      padding: 30px;
      a {
        text-decoration: none;
      }
    }
  }
</style>
