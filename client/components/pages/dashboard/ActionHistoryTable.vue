<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Action history</h3>
        </div>
        <div class="col text-right">
          <el-button size="small" type="primary" :to="{ path: '/admin/log/operation' }">See all</el-button>
        </div>
      </div>
    </div>

    <div class="table-responsive table">
      <el-table :data="contentData" width="100%" header-row-class-name="thead-light">
        <el-table-column label="#"  min-width="50px">
          <template #default="{ row, $index }">
            <div>{{ $index + 1 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="用户名" min-width="50px" prop="name" />
        <el-table-column label="操作" min-width="110px" prop="operations">
          <template #default="{ row }">
            {{ row.operations.substr(0, 20) }}
          </template>
        </el-table-column>
        <el-table-column label="时间" min-width="90px" prop="operate_time">
          <template #default="{ row }">
            {{ moment(row.operate_time) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'SocialTrafficTable',
  props: {
    tableData: {
      type: Array,
    },
  },
  setup(props) {
    const contentData = computed(() => {
      return props.tableData && props.tableData.length ? props.tableData : [];
    });

    function moment(date) {
      const dateObject = new Date(date);
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, '0');
      const day = String(dateObject.getDate()).padStart(2, '0');
      const hours = String(dateObject.getHours()).padStart(2, '0');
      const minutes = String(dateObject.getMinutes()).padStart(2, '0');
      const seconds = String(dateObject.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }


    return {
      contentData,
      moment,
    };
  },
};
</script>
