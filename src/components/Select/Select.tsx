import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './select.css';
import { PullDownIcon } from '../Icon/PullDownIcon';

interface SelectProps {
    text: string
}
export class Select extends Component<SelectProps, any>{
    render() {
        return (
            <View style="width:80px;border-bottom:1px solid rgba(0, 0, 0, 0.42);font-size:1rem;">
                <View className='selectItem'>
                    {/* TODO文字溢出 */}
                    <em>{this.props.text}</em>
                    <PullDownIcon size={12} />
                </View>
            </View>
        )
    }
}