<template>
  <div>
  <NuxtLayout name="admin-layout">
    <div class="home-content" v-loading="loading">
    <el-row :gutter="20">
      <el-col :md="24">
        <el-card>
          <template #header>
            <div>
              <span>Introduction</span>
            </div>
          </template>
          <div>
            <el-button type="primary" @click="refreshData">fetch</el-button>
            <p>Based on Express, Nuxt, Bootstrap, Sequelize.</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :md="6" :sm="12" :xs="24" v-for="(item, index) in config" :key="index">
          <stats-card :type="item.type" :icon="item.icon">
            <template #title>
              {{ item.name }}
            </template>
            <template #subTitle>
              {{ item.value }}
            </template>
            <template #footer> </template>
          </stats-card>
        </el-col>
      </el-row>

    <el-row :gutter="20">
      <el-col :md="12" :sm="12" :xs="24">
        <login-history-table style="min-height: 680px" :table-data="login_time" />
      </el-col>
      <el-col :md="12" :sm="12" :xs="24">
        <action-history-table style="min-height: 680px" :table-data="operation_logs" />
      </el-col>
    </el-row>
    </div>
  </NuxtLayout>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { ElLoading } from 'element-plus'
import ActionHistoryTable from '@/components/pages/dashboard/ActionHistoryTable.vue'
import LoginHistoryTable from '@/components/pages/dashboard/LoginHistoryTable.vue'
useHead({
  title: 'Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Dashboard'
    }
  ]
})
const config = ref([]) // Replace this with your actual data structure
const login_time = ref([]) // Replace this with your actual data structure
const operation_logs = ref([]) // Replace this with your actual data structure
const loading = ref(false)

const featDsData = async () => {

  try {
    loading.value = true;
    const res = await useFetch('/api/admin/rbac');
    const data = res.data.value;
    if (data) {
      console.log(data);
      config.value = data.config;
      login_time.value = data.login_time;
      operation_logs.value = data.operation_logs;
      loading.value = false;
    }
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};
const refreshData = () => {
  featDsData();
};
onMounted(() => {
  nextTick(async () => {
    featDsData();
  });
})
</script>
<style scoped>
.home-content {
  .el-row {
    .el-col {
      margin-bottom: 15px;
    }
  }
}
</style>
