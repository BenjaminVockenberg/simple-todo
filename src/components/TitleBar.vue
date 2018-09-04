<template>
    <div class="row">
        <div class="col-sm-12">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleBar',
    props: {
        msg: String
    }
}
</script>
