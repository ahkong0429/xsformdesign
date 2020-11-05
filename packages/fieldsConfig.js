import areaList from './utils/area';
export default[
    {
        title: '基础字段',
        list: [
            {
                type: 'input',
                label: '单行文本',
                icon: 'icon-input',
                span: 24,
                display: true
            },
            {
                type: 'textarea',
                label: '多行文本',
                icon: 'icon-textarea',
                span: 24,
                display: true
            },
            {
                type: 'number',
                label: '计数器',
                icon: 'icon-number',
                controls: true,
                span: 24,
                display: true
            },
            {
                type: 'radio',
                label: '单选框',
                icon: 'icon-radio',
                dicData: [
                    {
                        label: '选项一',
                        value: '0'
                    }, {
                        label: '选项二',
                        value: '1'
                    }, {
                        label: '选项三',
                        value: '2'
                    },
                ],
                span: 24,
                display: true,
                dicOption: 'static',
                props: {
                    label: 'label',
                    value: 'value'
                }
            }, {
                type: 'checkbox',
                label: '多选框',
                icon: 'icon-checkbox',
                dicData: [
                    {
                        label: '选项一',
                        value: '0'
                    }, {
                        label: '选项二',
                        value: '1'
                    }, {
                        label: '选项三',
                        value: '2'
                    },
                ],
                span: 24,
                display: true,
                dicOption: 'static',
                props: {
                    label: 'label',
                    value: 'value'
                }
            }, {
                type: 'time',
                label: '时间选择器',
                icon: 'icon-time',
                span: 24,
                display: true,
                format: 'HH:mm:ss',
                valueFormat: 'HH:mm:ss'
            }, {
                type: 'date',
                label: '日期选择器',
                icon: 'icon-date',
                span: 24,
                display: true,
                format: 'yyyy-MM-dd',
                valueFormat: 'yyyy-MM-dd'
            }, {
                type: 'rate',
                label: '评分',
                icon: 'icon-star',
                span: 24,
                display: true,
                max: 5,
                value: 0,
                texts: [
                    '极差',
                    '失望',
                    '一般',
                    '满意',
                    '惊喜'
                ],
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }, {
                type: 'color',
                label: '颜色选择器',
                icon: 'icon-color',
                span: 24,
                display: true
            }, {
                type: 'select',
                label: '下拉选择器',
                icon: 'icon-select',
                dicData: [
                    {
                        label: '选项一',
                        value: 0
                    }, {
                        label: '选项二',
                        value: 1
                    }, {
                        label: '选项三',
                        value: 2
                    },
                ],
                cascaderItem: [],
                span: 24,
                display: true,
                dicOption: 'static',
                props: {
                    label: 'label',
                    value: 'value'
                }
            }, {
                type: 'switch',
                label: '开关',
                icon: 'icon-switch',
                span: 24,
                display: true,
                value: 0,
                dicData: [
                    {
                        label: '',
                        value: '0'
                    }, {
                        label: '',
                        value: '1'
                    }
                ]
            }, {
                type: 'slider',
                label: '滑块',
                icon: 'icon-slider',
                span: 24,
                display: true,
                min: 0,
                max: 10
            },
        ]
    }, {
        title: '高级字段',
        list: [
            {
                type: 'upload',
                label: '图片上传',
                icon: 'icon-img',
                span: 24,
                display: true,
                showFileList: true,
                multiple: true,
                limit: 10,
                action: "",
                propsHttp: {
                    url: ""
                },
                canvasOption: {},
                headersConfig: [],
                dataConfig: [],
                listType: "picture-card",
                accept: "image/png,image/jpg,image/jpeg,image/gif,image/jpg,image/jfif,image/jpg,image/bmp,image/webp",
                subtype: "img"
            },
            {
                type: 'upload',
                label: '文件上传',
                icon: 'icon-upload',
                span: 24,
                display: true,
                showFileList: true,
                multiple: true,
                limit: 10,
                canvasOption: {},
                headersConfig: [],
                dataConfig: [],
                action: "",
                propsHttp: {
                    url: ""
                }
            },
            {
                type: 'ueditor',
                component: 'avue-ueditor',
                label: '编辑器',
                icon: 'icon-richtext',
                span: 24,
                display: true,
                options: {
                    action: '',
                    oss: '',
                    props: {},
                    ali: {},
                    qiniu: {}
                }
            },
            {
                type: 'cascader',
                label: '级联选择器',
                icon: 'icon-link',
                span: 24,
                display: true,
                dicData: [
                    {
                        label: '选项一',
                        value: 0,
                        children: [
                            {
                                label: '选项1-1',
                                value: 11
                            }, {
                                label: '选项1-2',
                                value: 12
                            }
                        ]
                    }, {
                        label: '选项二',
                        value: 1
                    }, {
                        label: '选项三',
                        value: 2
                    },
                ],
                cascaderIndex: 1,
                showAllLevels: true,
                dicOption: 'static',
                separator: "/",
                props: {
                    label: 'label',
                    value: 'value',
                    span: 24,
                    display: true
                }
            }, {
                type: "button",
                label: "按钮",
                icon: "icon-input",
                display: true,
                click: "console.log('点到我了')",
                event: {},
                component: "el-button",
                span: 24,
                params: {
                    html: '点我！'
                }
            }, {
                type: 'title',
                icon: 'icon-title',
                span: 24,
                display: true,
                styles: {
                    fontSize: '18px',
                    color: '#000'
                },
                label: '标题',
                labelWidth: '0px',
                value: '标题'
            }, {
                type: "ptag",
                label: "文本",
                icon: 'icon-title',
                display: true,
                event: {},
                component: "span",
                span: 24,
                params: {
                    html: '这里是一段文本'
                }
            }, {
                type: "divider",
                label: "分隔符",
                icon: "icon-input",
                display: true,
                event: {},
                component: "el-divider",
                span: 24,
                params: {
                    html: ''
                }
            }, {
                type: 'cascader',
                label: '省市级联动',
                icon: 'icon-link',
                span: 24,
                display: true,
                dicData: areaList,
                cascaderIndex: 1,
                showAllLevels: true,
                dicOption: 'static',
                iscity: true,
                separator: "/",
                props: {
                    label: 'label',
                    value: 'value',
                    span: 24,
                    display: true
                }
            }, {
                type: 'map',
                component: 'avue-input-map',
                label: '地图选择器',
                icon: 'icon-map',
                span: 24,
                display: true
            }
        ]
    }, {
        title: '布局字段',
        list: [
            {
                type: 'group',
                label: '分组',
                icon: 'icon-group',
                display: true,
                arrow: false,
                collapse: true,
                children: {
                    column: []
                }
            }, {
                type: 'dynamic',
                label: '子表单',
                icon: 'icon-table',
                span: 24,
                display: true,
                children: {
                    align: 'center',
                    headerAlign: 'center',
                    index: false,
                    addBtn: true,
                    delBtn: true,
                    column: []
                }
            }
        ]
    }, {
        title: '定制字段',
        list: [
            // {
            //     type: 'icon',
            //     label: '图标',
            //     component: 'avue-input-icon',
            //     icon: 'icon-icon',
            //     span: 24,
            //     display: true,
            //     params: {
            //         iconList: [
            //             {
            //                 label: '基本图标',
            //                 list: [
            //                     'el-icon-info',
            //                     'el-icon-error',
            //                     'el-icon-success',
            //                     'el-icon-warning',
            //                     'el-icon-question'
            //                 ]
            //             }, {
            //                 label: '方向图标',
            //                 list: [
            //                     'el-icon-back',
            //                     'el-icon-arrow-left',
            //                     'el-icon-arrow-down',
            //                     'el-icon-arrow-right',
            //                     'el-icon-arrow-up'
            //                 ]
            //             }, {
            //                 label: '符号图标',
            //                 list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
            //             }
            //         ]
            //     }
            // }
        ]
    }
]
