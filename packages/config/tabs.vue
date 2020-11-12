<template>
  <div>
    <el-form-item label="标题宽度">
      <el-input v-model="data.labelWidth" placeholder="标题宽度"></el-input>
    </el-form-item>

    <el-form-item label="选项卡配置">
      <ul>
        <li v-for="(item, index) in data.params.option.column" :key="index">
          <el-input
            style="margin-right: 5px"
            size="mini"
            v-model="item.label"
            placeholder="选项卡名称"
          ></el-input>
          <el-input
            size="mini"
            v-model="item.prop"
            placeholder="选项卡属性"
          ></el-input>
          <el-button
            @click="handleRemoveFields(index)"
            circle
            plain
            type="danger"
            size="mini"
            icon="el-icon-minus"
            style="padding: 4px; margin-left: 5px"
          ></el-button>
        </li>
      </ul>
      <div style="margin-left: 22px">
        <el-button type="text" @click="handleAddFields">添加列 </el-button>
      </div>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "config-tabs",
  props: ['data'],
  components: {},
  data () {
    return {
      validator: {
        type: null,
        required: null,
        pattern: null,
        length: null
      },
      option: {
        column: [{
          prop: 'tabProp2',
          label: 'tabName2'
        }, {
          prop: 'tabProp1',
          label: 'tabName1'
        }]
      },
    }
  },
  methods: {
    handleRemoveFields (index) {
      this.data.params.option.column.splice(index, 1)
    },
    handleAddFields () {
      const i = Math.ceil(Math.random() * 99999)
      this.data.params.option.column.push({ label: `选项卡${i}`, prop: `tab${i}` })
    },
  },
}
</script>
