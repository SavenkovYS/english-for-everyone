<template>
    <div class="base-text-input">
        <label class="base-text-input__label">{{ label }}</label>
        <input
            class="base-text-input__field"
            :id="id"
            :type="type"
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            :placeholder="placeholder"
            autocomplete="on"
        />
    </div>

</template>

<script setup lang="ts">
    import { defineProps } from "@vue/runtime-core";
    import { defineEmits } from "@vue/runtime-core";

    interface Props {
        type: String;
        modelValue: String;
        id?: String,
        placeholder: String,
        label: String
    }

    const { type, modelValue, id, placeholder, label } = defineProps<Props>();

    const emit = defineEmits<{
        (e: 'update:modelValue', value: String): void
    }>();


</script>

<style lang="scss" scoped>
    .base-text-input {
        &__label {
            display: block;
            margin-bottom: 5px;
            padding-left: 2px;

            font-weight: 700;
        }

        &__field {
            width: 100%;
            padding: 5px 10px;

            border: 2px solid #5fa406;
            border-radius: 5px;
        }

        &__field:hover {
            border: 2px solid #9999CC;
        }
    }
</style>