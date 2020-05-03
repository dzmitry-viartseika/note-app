<template>
    <div class="pad">
      <input type="text" class="pad__title"
             placeholder="Untitled note"
             v-model="note.title"
             @keydown="save()"
      >
      <textarea class="pad__text"
                v-model="note.body"
                @keydown="save()"
                placeholder="Start writing...."></textarea>
      <div class="pad__footer">
        <ul class="pad__footer-items">
          <li  class="pad__footer-item">Words: x</li>
          <li  class="pad__footer-item pad__footer-item_right">Last saved: {{ lastSaved }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'padTemplate',
  computed: {
    ...mapGetters(['note', 'lastSaved']),
  },
  methods: {
    ...mapActions(['saveNote', 'startSaveTimeout']),
    save() {
      if (!this.note.id) {
        this.saveNote();
      }
      this.startSaveTimeout();
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/placeholders";
  .pad {
    background: #fff;
    flex: 4;
    height: 100%;
    min-width: 72%;
    display: flex;
    flex-direction: column;

    &__title {
      width: 100%;
      border: 0;
      font: inherit;
      font-size: 1.6em;
      outline: none;
      padding: 25px 30px 20px;
    }

    &__text {
      width: 100%;
      margin: 0;
      font: inherit;
      font-size: 1em;
      outline: none;
      padding: 20px 30px;
      resize: none;
      border: 0;
      line-height: 2;
      height: 100%;
    }

    &__footer {
      padding: 20px 30px;

      &-items {
        display: flex;
      }

      &-item {
        @extend %inline-list;
        font-size: .9em;

        &_right {
          margin-left: auto;
          text-align: right;
        }
      }
    }
  }
</style>
