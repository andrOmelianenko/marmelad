/* Modules */
import   React,
       { Component }            from 'react'
import   Grid                   from 'styled-components-grid'
/* Components */
import   Select                 from './Select'
import   Animated               from '../global/Animated'
/* Styles */
import { Container,
         SectionHeadingBlock,
         SectionHeading,
         InfoText }             from '../../styles/global/GENERAL';
import { FormSection,
         FormTag,
         InputItem,
         Label,
         Input,
         TextareaItem,
         Textarea,
         SelectItem,
         SendStatus }           from '../../styles/chunks/form';
import { Button}                from '../../styles/global/button';

class Form extends Component {
    state = {
        name: '',
        email: '',
        textarea: '',
        budget: '',
        nameValid: false,
        mailValid: false,
        formValid: false,
        askedForSubmit: false,
        sending_status: 'none',
        highlightInvalidFields: false
    }

    handleSubmit = e => {
        const {formValid, name, email, textarea, budget} = this.state
        e.preventDefault()
        this.setState({
            askedForSubmit: true
        })
        this.showInvalid()

        if (formValid) {
            fetch('https://api.marmelad.biz/api/mail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, textarea, budget})
            })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error(res.statusText)
                    }
                    this.setState({ sending_status: 'sent' })
                    return res
                })
                .catch(error => {
                    this.setState({ sending_status: 'error' })
                    console.log(error)
                })

            this.setState({
                name: '',
                email: '',
                textarea: '',
                budget: ''
            })
        }
    }

    setBudget = value => {
        this.setState({
            budget: value
        })
    }

    handleChange = event => {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, () => {
            if (name !== 'textArea') {
                this.validateField(name, value)
            }
        })
    }

    showInvalid = () => {
        this.setState({
            highlightInvalidFields: !this.state.formValid
        })
    }

    handleBlur = () => {
        this.showInvalid()
    }

    handleFocus = () => {
        this.setState({
            askedForSubmit: false
        })
    }

    validateField = (fieldName, value) => {
        let mailValid = this.state.mailValid
        let nameValid = this.state.nameValid
        // eslint-disable-next-line
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        switch (fieldName) {
            case 'email':
                mailValid = regex.test(value)
                break
            case 'name':
                nameValid = value.length >= 2
                break
            default:
                break
        }
        this.setState({
            mailValid: mailValid,
            nameValid: nameValid
        }, this.validateForm)
    }

    validateForm = () => {
        this.setState({
            formValid: this.state.mailValid && this.state.nameValid
        })
    }

    render() {
        const { expanded } = this.props
        const { name, nameValid, highlightInvalidFields, sending_status,
                askedForSubmit, email, mailValid, textarea } = this.state
        return (
            <Grid.Unit
                size={{ss: 4 / 4, ms: 8 / 8, ls: 20 / 22}}
                component={FormSection}
                margin={expanded}
                >
                <Animated>
                    <Grid
                        component={Container}
                        halign='center'
                        >
                        {
                            ( expanded )
                                ? <Grid.Unit
                                    size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                                    component={SectionHeadingBlock}
                                    hight
                                >
                                    <SectionHeading>
                                        У вас есть проект? <br/>
                                        Просто напишите нам.
                                        {/* Do you have a project? <br/>
                                        Just letter us. */}
                                    </SectionHeading>
                                </Grid.Unit>
                                : <Grid.Unit
                                    size={{ss: 4 / 4, ms: 8 / 8, ls: 6 / 20, ws: 6 / 20}}
                                    component={SectionHeadingBlock}
                                    hight
                                    >
                                    <SectionHeading>
                                        Связаться с нами
                                        {/* Contact us */}
                                    </SectionHeading>
                                </Grid.Unit>
                        }
                        <Grid.Unit
                            component={FormTag}
                            size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 20, ws: 10 / 20}}
                            onSubmit={this.handleSubmit}
                            >
                            <Grid>
                                <Grid.Unit
                                    size={{ss: 4 / 4, ms: 4 / 8, ls: 6 / 12, ws: 5 / 10}}
                                    component={InputItem}
                                    inputName
                                    >
                                    <Label htmlFor="name" >
                                        Ваше имя
                                        {/* Your name */}
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        autocomplete="off"
                                        name='name'
                                        value={name}
                                        validity={nameValid}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        onFocus={this.handleFocus}
                                        invalid={
                                            (
                                                highlightInvalidFields
                                                && !nameValid
                                                && name
                                            ) || (
                                                highlightInvalidFields
                                                && !nameValid
                                                && askedForSubmit
                                            )
                                        }
                                    >
                                    </Input>
                                </Grid.Unit>
                                <Grid.Unit
                                    size={{ss: 4 / 4, ms: 4 / 8, ls: 5 / 10}}
                                    component={InputItem}
                                    inputMail
                                    >
                                    <Label htmlFor="mail" >
                                        Эл. почта
                                        {/* E-mail */}
                                    </Label>
                                    <Input
                                        type="email"
                                        id="mail"
                                        autocomplete="off"
                                        name='email'
                                        value={email}
                                        validity={mailValid}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        onFocus={this.handleFocus}
                                        invalid={
                                            (
                                                highlightInvalidFields
                                                && !mailValid
                                                && email
                                            ) || (
                                                highlightInvalidFields
                                                && !mailValid
                                                && askedForSubmit
                                            )
                                        }
                                    >
                                    </Input>
                                </Grid.Unit>
                                <Grid.Unit
                                    size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 12, ws: 10 / 10}}
                                    component={TextareaItem}
                                    margin={expanded}
                                    >
                                    <Textarea
                                        placeholder="Ваш текст здесь..."
                                        // placeholder = "Your text here..."
                                        name='textarea'
                                        value={textarea}
                                        onChange={this.handleChange}
                                        />
                                </Grid.Unit>

                                {
                                    ( expanded )
                                        ? <Grid.Unit
                                            size={{ss: 4 / 4, ms: 8 / 8, ls: 12 / 12, ws: 10 / 10}}
                                            component={SelectItem}
                                            >
                                            <InfoText>
                                                Примерный бюджет
                                                {/* Approximate budget */}
                                            </InfoText>
                                            <Select setBudget={this.setBudget} />
                                        </Grid.Unit>
                                        : null
                                }

                                <Grid.Unit
                                    size={{ss: 2 / 4, ms: 2 / 8, ls: 4 / 12, ws: 3 / 10}}
                                    >
                                    <Button>
                                        Отправить
                                        {/* Send */}
                                    </Button>
                                </Grid.Unit>
                                <Grid.Unit
                                    size={{ss: 2 / 4, ms: 6 / 8, ls: 8 / 12, ws: 7 / 10}}
                                    style = {{ position: 'relative' }}
                                    >
                                    {
                                        ( sending_status === 'sent')
                                            ? <SendStatus>Ваше письмо отправлено</SendStatus>
                                            : ( sending_status === 'error')
                                            ? <SendStatus>Сервер сообщил об ошибке</SendStatus>
                                            : null
                                    }
                                </Grid.Unit>
                            </Grid>
                        </Grid.Unit>
                        <Grid.Unit size={{ws: 2 / 20}} visible={{ss: false, ws: true}} />
                    </Grid>
                </Animated>
            </Grid.Unit>
        )
    }
}

export default Form
