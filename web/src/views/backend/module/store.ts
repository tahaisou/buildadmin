import { reactive } from 'vue'
import { uuid } from '/@/utils/random'
import { moduleState } from './types'

export const state = reactive<moduleState>({
    loading: {
        buy: false,
        table: true,
        common: false,
        install: false,
        goodsInfo: false,
    },
    dialog: {
        buy: false,
        common: false,
        goodsInfo: false,
        baAccount: false,
    },
    table: {
        remark: '',
        modules: [],
        modulesEbak: [],
        category: [],
        onlyLocal: false,
        indexLoaded: false,
        params: {
            quickSearch: '',
            activeTab: 'all',
        },
    },
    goodsInfo: {},
    buy: {
        info: {},
        agreement: true,
    },
    common: {
        uid: '',
        moduleState: 0,
        type: 'loading',
        dialogTitle: '',
        fileConflict: [],
        dependConflict: [],
        loadingTitle: 'init',
        loadingComponentKey: uuid(),
        waitInstallDepend: [],
        dependInstallState: 'none',
        disableConflictFile: [],
        disableDependConflict: false,
        disableParams: {},
    },
    installedModule: [],
    installedModuleUids: [],
})
