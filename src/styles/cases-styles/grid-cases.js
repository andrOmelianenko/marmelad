import styled       from "styled-components";
import { media }    from '../global/media-settings';

import { ImgCell }  from './image-cases';

export const GridSection = styled.section`
    img {
        vertical-align: bottom;
    }
    ${ media.ss`
        margin-top: 55px;
    ` };
    ${ media.ms`
        margin-top: 75px;
    ` };
    ${ media.ls`
        margin-top: 130px;
    ` };
`;
export const GridImgCell = styled(ImgCell)`
    ${ media.ss`
        // margin-top: 10px;
    ` };
    ${ media.ms`` };
    ${ media.ls`
        // margin-top: 83px;
        margin-top: 20px;
    ` };
`;