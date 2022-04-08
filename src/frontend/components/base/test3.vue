<template>
    <v-input
        :class="$style.element"
        :disabled="disabled"
        :error="error"
        :error-to-show="errorToShow"
        :title="title"
    >
        <div :class="$style.content">
            <input
                :class="[$style.input, { [$style.error]: errorToShow, [$style.value]: isFocused }]"
                :placeholder="placeholder"
                :value="value"
                :disabled="disabled"
                type="text"
                @input="onInput"
                @focus="onFocus(true)"
            />
            <icon :class="[$style.icon, { [$style.primary]: value }]" name="search" />
            <transition name="fade">
                <v-button v-if="isFocused" :class="$style.button" color="transparent" @click="onClose">
                    <icon name="close" widrh="12" height="12" />
                </v-button>
            </transition>
        </div>
    </v-input>
</template>
<script>
import debounce from 'lodash/debounce'
import Vue from 'vue'
import VButton from '@elements/buttons/VButton.vue'
import VInput from '@elements/inputs/VInput.vue'
import validate from '@utils/validate'

export default Vue.extend({
    name: 'SearchInput',
    components: { VInput, VButton },
    props: {
        title: String,
        value: String,
        placeholder: String,
        rules: {
            default: () => [],
            type: Array,
        },
        disabled: Boolean,
    },
    data() {
        return {
            error: '',
            errorToShow: '',
            isFocused: false,
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
        onInput({ target: { value } }) {
            this.$emit('input', value)
            this.onSearch()
        },
        // eslint-disable-next-line func-names
        onSearch: debounce(function () {
            this.$emit('search', this.value)
        }, 250),

        onClose() {
            this.onFocus(false)
            this.$emit('close')
        },
        onFocus(isFocused) {
            this.$emit('focus', isFocused)
            if (!isFocused) {
                this.$emit('input', '')
            }
            this.isFocused = isFocused
        },
    },
})
</script>
<style lang="scss" module>
.element {
    position: relative;
    width: 100%;
}

.content {
    width: 100%;
}

.icon {
    position: absolute;
    top: 11px;
    left: 15px;
    width: 14px;
    height: 14px;
    color: $secondary-medium;
    transition: color $transition;

    &.primary {
        color: $primary !important;
    }
}

.input {
    width: 100%;
    width: 100%;
    padding: 8px 15px 8px 38px;
    color: white;
    font-weight: 400;
    font-size: 15px;
    word-wrap: break-word;
    background-color: $dark;
    border: 1px solid $dark;
    border-radius: 18px;
    outline: none;
    transition: border $transition, background $transition,
    width $transition cubic-bezier(0.5, 0.2, 0.5, 0.9);

    &::placeholder {
        overflow: hidden;
        color: $secondary-medium;
        white-space: nowrap;
        text-overflow: ellipsis;
        opacity: 0.5;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        background-color: $secondary;
        border-color: $secondary;

        & ~ .icon {
            color: white;
        }
    }

    &.error {
        border: 1px solid $error;
    }

    &.value {
        width: 93%;

        @media only screen and (max-width: 500px) {
            width: 90%;
        }
    }
}

.button {
    position: absolute !important;
    top: 0;
    right: 0;
    align-self: center;
    justify-self: center;
    width: auto !important;
    padding: 12px 6px !important;
}
</style>