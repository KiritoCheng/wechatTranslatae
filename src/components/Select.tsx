import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

export class Select extends Component {
    render() {
        return (
            <View style="min-width:120px;border-bottom:1px solid rgba(0, 0, 0, 0.42);font-size:1rem">

                <View style="position:relative;width:100%">
                    <View style="padding:6px 0 7px;cursor:pointer">
                        <em>123</em>
                    </View>
                </View>
                {/* //TODO
                <svg style="color:rgba(0, 0, 0, 0.54);width:1em;height:1em">
                    <path d="M7 10l5 5 5-5z"></path>
                </svg> */}
            </View>
        )
    }
}