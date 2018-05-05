
import * as types from './mutation-types'

const matations={
    /**
     * state:当前状态树
     * data: 提交matations时传的参数
     */
    //是否有渠道
    [types.TEST] (state,data)  {
        state.test = data;
    },


}



export default matations
