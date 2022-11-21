<template>
  <b-row
    :style="getMessageColor(message)"
    class="h-auto w-100 my-1 flex-column justify-content-start"
    style="color: rgb(241, 224, 197); background-color: rgba(241, 224, 197, 0.05);
          font-size: 1rem;"
  >
    <b-col align-self="end">
      <!-- role of sender (e.g. Curator) -->
      <p
        class="mb-0 mx-2 mt-2 text-uppercase"
        style=" color: rgb(202, 166, 110);
         font-weight: bold"
      >
        {{ message.role }}<span v-if="showUsername"> [{{username}}]</span>
      </p>
      <!-- message of sender -->
      <p class="mx-2" style="word-wrap: break-word">
        {{ message.message }}
      </p>
      <!-- timestamp -->
      <p class="mb-2 mx-2">[ {{ toDate(message.dateCreated) }} ]</p>
      <!-- report button -->
      <div v-if="showReportButton">
        <b-button
          squared
          v-b-tooltip.hover.top="'Report this player for violating the code of conduct'"
          v-b-modal="`report-modal-${message.role}-${message.dateCreated}`"
          class="mb-2 mx-2 py-0 px-1"
          variant="outline-primary"
          size="sm"
          style="position: absolute; right: 0; bottom: 0;
            border-color: transparent; color: inherit;"
        >
          Report
        </b-button>
        <b-modal
          :id="`report-modal-${message.role}-${message.dateCreated}`"
          title="Report this player"
          centered
          no-stacking
          header-bg-variant="primary"
          header-border-variant="primary"
          body-bg-variant="dark"
          footer-border-variant="dark"
          footer-bg-variant="dark"
        >
          <ReportModal :message=message></ReportModal>
          <template #modal-footer="{ cancel }">
            <b-button variant="secondary" @click="cancel">Cancel</b-button>
            <b-button variant="primary" @click="submitReport">Submit</b-button>
          </template>
        </b-modal>
      </div>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import { ChatMessageData } from "@port-of-mars/shared/types";
import ReportModal from "@port-of-mars/client/components/game/modals/ReportModal.vue"

@Component({
  components: {
    ReportModal,
  }
})
export default class ChatMessage extends Vue {
  @Prop()
  message!: ChatMessageData;
  @Prop({ default: false })
  showUsername: boolean;
  @Prop({ default: false })
  showReportButton: boolean;

  get username() {
    return this.$tstore.state.players[this.message.role].username;
  }

  toDate(unixTimestamp: number): any {
    return new Date(unixTimestamp).toLocaleTimeString();
  }

  getMessageColor(message: ChatMessageData): object {
    if (message.role) {
      return { backgroundColor: `var(--color-${message.role})` };
    }
    return { backgroundColor: "var(--light-shade-05)" };
  }

  submitReport() {
    console.log("sumbitted report");
  }
}
</script>

<style lang="scss" scoped>
</style>
