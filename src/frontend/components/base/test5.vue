<template>
    <div
        :class="[
      $style.container,
      {
        [$style.disabled]: disabled,
      },
    ]"
    >
        <label :class="$style.label">
      <span v-if="title" :class="$style.title">
        {{ title }}
      </span>
            <div :class="$style.content">
                <slot/>
            </div>
        </label>
        <transition name="slide-up-kit" mode="out-in" appear>
            <div v-if="error" :key="error" :class="$style.error">{{ errorToShow }}</div>
        </transition>
    </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'VInput',
    props: {
        title: String,
        error: String,
        errorToShow: String,
        disabled: Boolean,
    },
    inject: {
        form: {
            default: () => ({
                registerInput: () => ({}),
                unregisterInput: () => ({}),
            }),
        },
    },
    mounted() {
        this.form.registerInput(this)
    },
    destroyed() {
        this.form.unregisterInput(this)
    },
})
</script>
<style lang="scss" module>
.container {
    position: relative;
    display: block;
    width: 100%;
}

.label {
    display: grid;
    row-gap: 6px;
}

.title {
    width: 100%;
    padding-left: 3px;
    overflow: hidden;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.error {
    position: absolute;
    margin-top: 3.5px;
    color: $error;
    font-weight: 400;
    font-size: 10px;
    line-height: 1;
}

.disabled {
    opacity: 0.4;
}
</style>