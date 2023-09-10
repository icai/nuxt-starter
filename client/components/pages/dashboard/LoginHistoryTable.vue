<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Login history</h3>
        </div>
        <div class="col text-right">
          <el-button size="small" type="primary" :to="{ path: '/admin/log/login' }">See all</el-button>
        </div>
      </div>
    </div>
    <div class="table-responsive table" >
      <el-table  :data="contentData" width="100%" header-row-class-name="thead-light">
        <el-table-column label="#"  min-width="50px">
          <template v-slot="scope">
            <div>{{ scope.$index + 1 }}</div>
          </template>
        </el-table-column>
        <el-table-column label="用户名"  min-width="70px" prop="name" />
        <el-table-column label="登录IP"  min-width="90px" prop="ip" />

        <el-table-column label="登录时间"  min-width="90px" prop="login_time">
          <template #default="{ row }">
            {{ moment(row.login_time) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'PageVisitsTable',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const contentData = computed(() => props.tableData);

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
