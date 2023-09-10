<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">
      <div class="col">
        <slot>
          <h5 v-if="$slots.title || title" class="card-title text-uppercase text-muted mb-0">
            <slot name="title">
              {{ title }}
            </slot>
          </h5>
          <span v-if="$slots.subTitle || subTitle" class="h2 font-weight-bold mb-0">
            <slot name="subTitle">
              {{ subTitle }}
            </slot>
          </span>
        </slot>
      </div>

      <div v-if="$slots.icon || icon" class="col-auto">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow" :class="[`bg-${type}`, iconClasses]">
            <n-icon :icon="icon" />
          </div>
        </slot>
      </div>
    </div>

    <p v-if="$slots.footer" class="mt-3 mb-0 text-sm">
      <slot name="footer" />
    </p>
  </card>
</template>
<script>
import Card from './Card.vue'

export default {
  name: 'StatsCard',
  components: {
    Card
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    title: String,
    subTitle: String,
    iconClasses: [String, Array]
  }
}
</script>
<style></style>
