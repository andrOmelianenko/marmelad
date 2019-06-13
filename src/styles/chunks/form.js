import styled     from "styled-components"
import { palette,
         font,
size }   from '../global/theme'
import { media }  from '../global/media-settings'

export const FormSection = styled.section`
    ${ media.ss`
        margin: ${ props =>
            props.margin
                ? `0;`
                : '0 0 75px;'
            };
    ` }
    ${ media.ls`
       margin: ${ props =>
            props.margin
                ? `0;`
                : '0 0 178px;'
            };
        h2 {
            margin-bottom: 0;
        }
    ` }
`

export const FormTag = styled.form`
    ${ media.ss`
        padding: 0 ${size('padding_ss')} 0;
    ` }
    ${ media.ls`
        padding: 6px 1rem 0;
    ` }
`

/* InputItem styles */
export const InputItem = styled.div`
    color: ${palette(`lightGray`)};
    position: relative;
    ${ media.ss`
        margin-bottom: ${ props =>
            props.inputMail
                ? `0;`
                : '10px;'
            };
    ` };
    ${ media.ms`
        padding-left: 8px;
        margin-left: 0;
        margin-bottom: 0;
        &:nth-of-type(1) {
            margin-right: 0;
            padding-right: 7px;
            padding-left: 0;
        };
    ` };
`

/* Input styles */
export const Label = styled.label`
    position: absolute;
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        margin: 21px 0 0 18px;
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
    ` };
`

/* Input styles */
export const Input = styled.input`
    width: 100%;
    outline: none;
    display: block;
    color: ${palette(`mainBlack`)};
    background: transparent;
    transition: all 250ms;
    box-shadow: none;
    border-radius: 0;
    appearance: none;
    ${ props => props.invalid
        ? ('border: 1px solid red')
        : ('border: 1px solid rgba(153,153,153,0.5)')
    };
    &:focus {
        border-color: rgba(153,153,153,1);
        box-shadow: 5px 5px 9px 0px rgba(204,204,204,0.8);
    }

    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        padding: 20px 16px 19px 96px;
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
        padding: 19px 1rem 21px 8rem;
    ` };
    ${ media.ws`
        padding-left: 7rem;
    ` };
`

/* TextareaItem styles */
export const TextareaItem = styled.div`
    ${ media.ss`
    margin: ${ props =>
        props.margin
            ? `20px 0 24px;`
            : '20px 0 48px;'
        };
    ` };
    ${ media.ms`
        margin-top: 20px;
        margin-bottom: 36px;
    ` };
    ${ media.ls`
    margin-bottom: ${ props =>
        props.margin
            ? `30px;`
            : '60px;'
        };
    ` };
`

/* Textarea styles */
export const Textarea = styled.textarea`
    border: 1px solid rgba(153,153,153,0.5);
    color: ${palette(`mainBlack`)};
    display: block;
    width: 100%;
    resize: none;
    outline: none;
    box-shadow: none;
    border-radius: 0;
    appearance: none;
    &::-webkit-input-placeholder {
        color:${palette(`lightGray`)}
    ;}
    &::-moz-placeholder          {
        color:${palette(`lightGray`)}
    ;}/* Firefox 19+ */
    &:-moz-placeholder           {
        color:${palette(`lightGray`)}
    ;}/* Firefox 18- */
    &:-ms-input-placeholder      {
        color:${palette(`lightGray`)}
    ;}
    transition: all 250ms;
    &:focus {
        border-color: rgba(153,153,153,1);
        -webkit-box-shadow: 5px 5px 9px 0px rgba(204,204,204,0.8);
        -moz-box-shadow: 5px 5px 9px 0px rgba(204,204,204,0.8);
        box-shadow: 5px 5px 9px 0px rgba(204,204,204,0.8);
    }
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
        padding: 1.25rem 1rem 1.2rem;
        height: 201px;
    ` };
    ${ media.ms`
        height: 80px;
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
        height: 100px;
        padding-top: 9px;
    ` };
`

/* SelectItem styles */
export const SelectItem = styled.div`
    margin-bottom: 60px;
    ${ media.ss`
        p {
            margin-left: 18px;
            color: ${palette(`lightGray`)};
            padding: 0;
        };
    ` };
    ${ media.ms`
        padding-right: 8px
    ` }
    ${ media.ls`
        padding-right: 52px;
        margin-bottom: 85px;
        p {
            margin-bottom: 5px;
        };
    ` }
    ${ media.ws`
        padding-right: 30px;
        margin-bottom: 78px;
        p {
            margin-bottom: 5px;
        };
    ` }
`

export const SendStatus = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${ media.ss`
        font: 0.875rem/1.25rem ${font(`reg`)};
    ` };
    ${ media.ls`
        font: 1rem/1.875rem ${font(`reg`)};
    ` };
`
