<template>
    <div>
        <div class="toolbar">
            <el-button @click="undo">撤消</el-button>
            <el-button style="margin-left: 10px;" @click="preview(false)">预览</el-button>
            <el-button @click="save">保存</el-button>
            <el-button @click="clearCanvas">清空</el-button>
            <el-button @click="preview(true)">截图</el-button>

            <div class="canvas-config">
                <span>简历大小</span>
                <input v-model="canvasStyleData.width">
                <span>*</span>
                <input v-model="canvasStyleData.height">
            </div>
            <div class="canvas-config">
                <span>简历比例</span>
                <input v-model="scale" @input="handleScaleChange"> %
            </div>
        </div>

        <!-- 预览 -->
        <Preview v-if="isShowPreview" :is-screenshot="isScreenshot" @close="handlePreviewChange" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Preview from '@/components/Editor/Preview'
import eventBus from '@/utils/eventBus'
import changeComponentsSizeWithScale from '@/utils/changeComponentsSizeWithScale'

export default {
    components: { Preview },
    data() {
        return {
            isShowPreview: false,
            timer: null,
            isScreenshot: false,
            scale: 100,
        }
    },
    computed: mapState([
        'componentData',
        'canvasStyleData',
        'areaData',
        'curComponent',
        'curComponentIndex',
    ]),
    created() {
        eventBus.$on('preview', this.preview)
        eventBus.$on('save', this.save)
        eventBus.$on('clearCanvas', this.clearCanvas)

        this.scale = this.canvasStyleData.scale
    },
    methods: {
        handleScaleChange() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                // 画布比例设一个最小值，不能为 0
                // eslint-disable-next-line no-bitwise
                this.scale = (~~this.scale) || 1
                changeComponentsSizeWithScale(this.scale)
            }, 1000)
        },

        compose() {
            this.$store.commit('compose')
            this.$store.commit('recordSnapshot')
        },

        decompose() {
            this.$store.commit('decompose')
            this.$store.commit('recordSnapshot')
        },

        undo() {
            this.$store.commit('undo')
        },

        preview(isScreenshot) {
            this.isScreenshot = isScreenshot
            this.isShowPreview = true
            this.$store.commit('setEditMode', 'preview')
        },

        save() {
            this.postRequest('http://47.98.62.67:7070/ruseme/template',{
                username : JSON.stringify(this.componentData),
                title : JSON.stringify(this.canvasStyleData)})
                .then(resp => {
                    if(resp.code == 200)
                   localStorage.setItem('canvasData', JSON.stringify(this.componentData))
                   localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
                   this.$message.success('保存成功')
                  })
        },

        clearCanvas() {
            this.$store.commit('setCurComponent', { component: null, index: null })
            this.$store.commit('setComponentData', [])
            this.$store.commit('recordSnapshot')
        },

        handlePreviewChange() {
            this.isShowPreview = false
            this.$store.commit('setEditMode', 'edit')
        },
    },
}
</script>

<style lang="scss" scoped>
.toolbar {
    padding: 15px 10px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            margin-left: 10px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }
}
</style>
