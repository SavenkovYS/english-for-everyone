<template>
    <v-input :disabled="disabled" :error="error" :error-to-show="errorToShow" :title="title">
        <the-mask
            :class="[$style.input, errorToShow && $style.inputError]"
            :placeholder="placeholder"
            :mask="mask"
            :tokens="tokens"
            :type="type"
            v-model="input"
            :value="value"
            @input="onInput"
        />
    </v-input>
</template>
<script>
import Vue from 'vue'
import validate from '@utils/validate'

import VInput from '@elements/inputs/VInput.vue'

export default Vue.extend({
    name: 'MaskInput',
    components: {
        VInput,
    },
    props: {
        title: String,
        placeholder: String,
        mask: {
            type: Array,
            default: () => [],
        },
        value: String,
        type: {
            type: String,
            default: 'text',
        },
        rules: {
            type: Array,
            default: () => [],
        },
        tokens: {
            type: Object,
            default: () => ({}),
        },
        disabled: Boolean,
    },
    data() {
        return {
            input: '',
            error: '',
            errorToShow: '',
        }
    },
    watch: {
        input() {
            this.validate()
        },
    },
    async mounted() {
        this.input = this.value
        this.error = await validate(this.rules, this.value)
    },
    methods: {
        async validate() {
            this.error = await validate(this.rules, this.value)
            this.errorToShow = this.error
            return this.error
        },

        onInput() {
            this.$emit('input', this.input)
        },
    },
})
</script>
<style lang="scss" module>
.input {
    width: 100%;
    padding: 11px;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    word-wrap: break-word;
    border: 1px solid $secondary-light;
    border-radius: 6px;
    outline: none;
    transition: border $transition;

    &::placeholder {
        color: rgba(black, 0.5);
        font-size: 16px;
    }

    &Error {
        border: 1px solid $error;
    }
}
</style>