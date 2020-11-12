<template>
  <div id="app">
    <avue-form-design
      style="height: 100vh"
      :options="options"
      @submit="handleSubmit"
      :custom-fields="customFields"
    ></avue-form-design>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      customFields: [
        // {
        //   title: '分割线',
        //   component: 'el-divider',//ele分割线
        //   span: 24,
        //   icon: 'el-icon-eleme',
        //   tips: '看我：自定义属性怎么用？',
        //   labelWidth: '0px',
        //   params: {
        //     html: '<h3 style="color:red">分割线标题</h3>',
        //     contentPosition: "left",
        //   }
        // },
        {
          title: "重点提示",
          component: "el-alert",
          labelWidth: "0px",
          span: 24,
          icon: "el-icon-warning",
          // tips: "看我：自定义事件怎么用？",
          params: {
            title: "重点的提示文字",
            type: "error",
          },
          // event: {
          //   close: () => {
          //     console.log("alert关闭事件");
          //   },
          // },
        },
        // {
        //   title: "Tab标签",
        //   component: "el-tabs",
        //   labelWidth: "0px",
        //   span: 24,
        //   icon: "el-icon-menu",
        //   params: {
        //     type: "card",
        //     closable: false,
        //     addable: false,
        //     editable: false,
        //     value: "tab01",
        //     "tab-position": "top",
        //     html: "<tab-pane>TEST</tab-pane><tab-pane>TEST2</tab-pane>",
        //   },
        // },
      ],
      options: { column: [] },
    };
  },
  methods: {
    handleSubmit (val) {
      this.$message.success("查看控制台");
      console.log(val);
    },
  },
};
</script>
