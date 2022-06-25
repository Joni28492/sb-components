import { MyLabel, MyLabelProps } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        //se puede poner options para excluir
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

//los hijos de la pagina
export const Basic = Template.bind({})
Basic.args = {
    size: 'normal',

}

export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}
export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary' //primary | secondary | tertiary
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

//CustomFontColor
//fontColor, con el color picker
//size: h1
export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',

}