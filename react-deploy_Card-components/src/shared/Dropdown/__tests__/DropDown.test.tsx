import React from "react";
import { Dropdown } from "../Dropdown";
import { shallow } from "enzyme";

describe('DropDown',()=>{
    test('should render',()=>{
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('#button')).toBeDefined()//проверяет на что кнопка есть(что не null или undefinet)
    })
})