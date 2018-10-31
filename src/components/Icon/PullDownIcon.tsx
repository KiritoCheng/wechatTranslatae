import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.css';
import { IconProps } from './type';

export class PullDownIcon extends Component<IconProps> {
    static defaultProps = {
        size: 32
    }
    render() {
        return (
            <View className='pull_down' style={`width:${this.props.size}px;height:${this.props.size}px;background-size:${this.props.size}px ${this.props.size}px;`}></View>
        )
    }
}