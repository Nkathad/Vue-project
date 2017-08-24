<template>
<transition name="fade">
    <div class="modal fade in" v-if="showModal" style="display:block">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click="$emit('close')"><span aria-hidden="true">&times;</span></button>
                    <slot name="modal-title">
                        Modal title
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="modal-body">Body Title</slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" @click="$emit('close')">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default ({
    props: ['showModal'],
    data() {
        return {}
    }
})
</script>
<style>
.modal {
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .2s ease;
}

.modal-dialog {
    transition: all .2s ease;
}

.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
