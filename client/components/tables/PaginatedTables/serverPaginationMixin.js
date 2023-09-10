export default {
  data() {
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        pageSizes: [5, 10, 25, 50],
        total: 0
      }
    }
  },
  methods: {
    sortChange({ prop, order }) {
      if (prop) {
        this.tableData.sort((a, b) => {
          const aVal = a[prop]
          const bVal = b[prop]
          if (order === 'ascending') {
            return aVal > bVal ? 1 : -1
          }
          return bVal - aVal ? 1 : -1
        })
      } else {
        this.tableData.sort((a, b) => {
          return a.id - b.id
        })
      }
    }
  }
}
