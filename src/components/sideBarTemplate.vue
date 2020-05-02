<template>
    <div class="sidebar">
      <div v-if="notes.length">
        <note-template v-for="note in notes"
                       :note="note"
        />
      </div>
      <div class="sidebar__content"
           v-else
      >
        Boo, no notes. Get writing!
      </div>
    </div>
</template>

<script>
import noteTemplate from './noteTemplate.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sideBarTemplate',
  components: {
    noteTemplate,
  },
  computed: {
    ...mapGetters(['notes']),
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
