<template>
    <v-input :disabled="disabled" :error="error" :error-to-show="errorToShow" :title="title">
        <div :class="[$style.item, { [$style.disabled]: disabled }]">
            <span :class="[$style.text, $style[size], { [$style.active]: active }]">{{ text }}</span>
            <v-toggle
                :color="color"
                :is-disabled="disabled"
                :is-active="active"
                @input="$emit('input', $event)"
            />
        </div>
    </v-input>
</template>
<script>
import Vue from 'vue'
import validate from '@utils/validate'

import VInput from '@elements/inputs/VInput.vue'
import VToggle from '@elements/VToggle.vue'

export default Vue.extend({
    name: 'ToggleInput',
    components: { VInput, VToggle },
    props: {
        title: String,
        text: String,
        value: Boolean,
        color: String,
        rules: {
            default: () => [],
            type: Array,
        },
        size: {
            default: 'lg',
            validator: (v) => ['sm', 'lg'].includes(v),
            type: String,
        },
        disabled: Boolean,
        active: Boolean,
    },
    data() {
        return {
            error: '',
            errorToShow: '',
        }
    },
    watch: {
        value() {
            this.validate()
        },
    },
    async mounted() {
        this.error = await validate(this.rules, this.value)
    },
    methods: {
        async validate() {
            this.error = await validate(this.rules, this.value)
            this.errorToShow = this.error
            return this.error
        },
    },
})
</script>
<style lang="scss" module>
.item {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 20px;
    cursor: pointer;
    transition: opacity $transition, font-weight $transition;

    &.disabled {
        cursor: not-allowed;
    }
}

.text {
    color: $secondary;
    font-weight: 400;
    opacity: 0.4;
    transition: opacity $transition;

    &.sm {
        font-size: 12px;
        line-height: 12px;
    }

    &.lg {
        font-size: 15px;
        line-height: 15px;
    }

    &.active {
        opacity: 1;
    }
}
</style>