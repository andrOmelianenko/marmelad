/* Modules */
import   React,
       { Component } from 'react'
/* Styles */
import { InputSelect,
         SelectedValue,
         LabelSelect,
         ValuesList,
         SelectLabel,
         Dash }      from '../../styles/chunks/select'

class Select extends Component {
    state = {
        selectedValue: 'selectNone',
        checked:       false,
        selectNone:    true,
        select1k:      false,
        select2k:      false,
        select3k:      false,
        select5k:      false
    }

    toggleCheckbox = event => {
        this.setState({ checked: event.target.checked })
    }

    handleBlur = () => this.setState({ checked: false })

    handleValueSelect = event => {
        const { setBudget } = this.props
        this.setState({
            selectNone:    false,
            select1k:      false,
            select2k:      false,
            select3k:      false,
            select5k:      false,
        })
        this.setState({ checked: false })
        this.setState({ selectedValue: event.target.id })
        this.setState({
            [event.target.id]: event.target.checked,
        })
        // reverse data flow
        setBudget(event.target.value)
    }

    render() {
        const { checked, selectedValue } = this.state
        return (
            <InputSelect
                checked = { checked }
                tabIndex = '1'
                onBlur = { this.handleBlur }
                >
                <input
                    type = 'checkbox'
                    id = 'toggleSelect'
                    checked = { checked }
                    onChange = { this.toggleCheckbox }
                    hidden
                    >
                </input>
                <LabelSelect
                    htmlFor = 'toggleSelect'
                    checked = { checked }
                    >
                    <span />
                </LabelSelect>

                <SelectedValue
                    checked = { checked }
                    >
                    {
                        ( selectedValue === 'selectNone')
                            ? <Dash/>
                            : ( selectedValue === 'select1k')
                            ? <span>
                                1000&ndash;2000&nbsp;$
                              </span>
                            : ( selectedValue === 'select2k')
                            ? <span>
                                2000&ndash;3000&nbsp;$
                              </span>
                            : ( selectedValue === 'select3k')
                            ? <span>
                                3000&ndash;5000&nbsp;$
                              </span>
                            : ( selectedValue === 'select5k')
                            ? <span>
                                5000&nbsp;$&nbsp;+
                              </span>
                            : <span>
                                &ndash;&ndash;&ndash;&ndash;
                              </span>
                    }
                </SelectedValue>

                <ValuesList
                    checked = { checked }
                    >
                    <input
                        id = 'selectNone'
                        type = 'radio'
                        value = ''
                        onClick = { this.handleValueSelect }
                        hidden
                        >
                    </input>
                    <SelectLabel
                        htmlFor = 'selectNone'
                        selected = { this.state.selectNone }
                        >
                        <Dash/>
                    </SelectLabel>
                    <input
                        id = 'select1k'
                        type = 'radio'
                        value = '1000-2000'
                        onClick = { this.handleValueSelect }
                        hidden
                        >
                    </input>
                    <SelectLabel
                        htmlFor = 'select1k'
                        selected = { this.state.select1k }
                        >
                        1000&ndash;<nobr/>2000&nbsp;$
                    </SelectLabel>
                    <input
                        id = 'select2k'
                        type = 'radio'
                        value = '2000-3000'
                        onClick = { this.handleValueSelect }
                        hidden
                        >
                    </input>
                    <SelectLabel
                        htmlFor = 'select2k'
                        selected = { this.state.select2k }
                        >
                        2000&ndash;<nobr/>3000&nbsp;$
                    </SelectLabel>
                    <input
                        id = 'select3k'
                        type = 'radio'
                        value = '3000-5000'
                        onClick = { this.handleValueSelect }
                        hidden
                        >
                    </input>
                    <SelectLabel
                        htmlFor = 'select3k'
                        selected = { this.state.select3k }
                        >
                        3000&ndash;<nobr/>5000&nbsp;$
                    </SelectLabel>
                    <input
                        id = 'select5k'
                        type = 'radio'
                        value = '5000+'
                        onClick = { this.handleValueSelect }
                        hidden
                        >
                    </input>
                    <SelectLabel
                        htmlFor = 'select5k'
                        selected = { this.state.select5k }
                        >
                        5000&nbsp;$&nbsp;+
                    </SelectLabel>
                </ValuesList>
            </InputSelect>
        )
    }
}

export default Select
