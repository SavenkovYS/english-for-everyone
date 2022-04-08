<template>
    <v-input :disabled="disabled" :error="error" :error-to-show="errorToShow" :title="title">
        <div :class="$style.item">
            <v-checkbox
                :color="color"
                :is-disabled="disabled"
                :is-active="active"
                @input="$emit('input', $event)"
            >
                <slot />
            </v-checkbox>
        </div>
    </v-input>
</template>
<script>
import Vue from 'vue'
import validate from '@utils/validate'

import VInput from '@elements/inputs/VInput.vue'
import VCheckbox from '@elements/VCheckbox.vue'

export default Vue.extend({
    name: 'CheckboxInput',
    components: { VInput, VCheckbox },
    props: {
        title: String,
        text: String,
        value: Boolean,
        color: String,
        rules: {
            default: () => [],
            type: Array,
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
}

.text {
    color: $secondary;
    font-weight: 400;
}
</style>