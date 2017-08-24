<template>
<div>
    <a href="find_distributer.php" class="member-col pull-right"><i class="fa fa-group"></i>{{ distributortitle }}</a></div>
</template>
<script>
export default ({
    data() {
        return {
            distributortitle: 'Find Distributor'
        }
    }
})
</script>
<style scoped>
.member-col {
    line-height: 50px;
    padding: 0 12px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-transform: uppercase;
}

.member-col i {
    font-size: 18px;
    color: #fff;
    margin-right: 10px;
}
</style>
