import Taro from '@tarojs/taro';

export const TRANSLATE = 'TRANSLATE';

export const translation = (data) => {
    return {
        type: TRANSLATE,
        data
    }
}

export const httpTranslatr = (text: string, type = 'zh-CHS') => {
    return dispatch => {
        Taro.request({
            url: 'https://aidemo.youdao.com/trans',
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            data: `q=${text}&from=${type}&to=en`,
        }).then((res: any) => {
            if (res.data.errorCode == '0') {
                dispatch(translation({
                    translate: res.data.translation[0],
                    explains: res.data.basic && res.data.basic.explains ? res.data.basic.explains : []
                }))
            } else {

            }
        })
    }

}