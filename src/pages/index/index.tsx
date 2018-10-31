import Taro, { Component, Config } from '@tarojs/taro';
import { View, Textarea, Button } from '@tarojs/components';
import './index.scss';


import { connect } from '@tarojs/redux';
import { ThunkDispatch } from 'redux-thunk'
import { httpTranslatr } from '../../actions/translate';
import { Select } from '../../components/Select/Select';
import { TransformIcon } from '../../components/Icon/TransformIcon';

const mappToState = (state) => {
  return {
    result: state.translate
  }
}
const mapToProps = (dispatch: ThunkDispatch<any, any, any>) => {
  return {
    onClick: (text: string) => {
      dispatch(httpTranslatr(text))
    }
  }
}


class Index extends Component<any, { value: string }> {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  config: Config = {
    navigationBarTitleText: '首页'
  }


  handleChange(e) {
    this.setState({
      value: e.detail.value
    })
  }

  handleClick() {
    if (this.state.value.trim() == '') {
      return
    }
    this.props.onClick(this.state.value)
  }

  render() {

    const { translate, explains = [] } = this.props.result;

    return (
      <View>
        <View className='container shadow'>
          <Textarea className='translatorInput' placeholder="请输入你想翻译的文字" maxlength={-1}
            value=''
            onInput={this.handleChange} />

          <View className='toolbar'>
            <View style="flex:3">
              <View style="display:flex;flex-wrap: nowrap;align-items:center;">
                <View style="margin-right:32px">
                  <Select text='中文' />
                </View>
                <View style="margin-right:32px">
                  <TransformIcon size={24}/>
                </View>
                <View style="margin-right:32px">
                  <Select text='就解决' />
                </View>
              </View>
            </View>
            <Button className='translatorBtn shadow' onClick={this.handleClick}>
              翻译
            </Button>
          </View>

        </View>

        {
          translate &&
          <View style="margin-top:40px;padding:16px">
            <View className='remark'>翻译结果</View>
            <View className="card shadow">
              <View>{translate}</View>
              {
                explains.length > 0 &&
                <View>
                  <View style={{ fontSize: '16px', marginTop: '20px', padding: '.5em 0 0 0', borderTop: '1px solid #fff' }} >
                    {
                      explains.map((k) => {
                        return (
                          <View style={{ lineHeight: '24px' }}>{k}</View>
                        )
                      })
                    }
                  </View>
                </View>
              }

            </View>
          </View>
        }

      </View>
    )
  }
}

export default connect<any, any, any>(mappToState, mapToProps)(Index)

