import styledAx  from 'styled-ax';

/*
 * Theme object initialization
 */
export const theme = {

    /* Grid / media breakpoints */
    breakpoints: {
        ss: 0,    // small screens
        ms: 600,  // medium screens
        ls: 1024, // large screens
        ws: 1440  // wide screens
    },

    fonts: {
        bold:  'Proxima Nova Semibold, sans-serif',
        reg:   'Proxima Nova Regular, sans-serif',
        black: 'Proxima Nova Black, sans-serif'
    },

    /* Color palette */
    palette: {
        transp:    'transparent',
        white:     '#ffffff',
        mainBlack: '#333333',
        lineHr:    '#dddddd',
        plainText: '#848484',
        lightGray: '#999999',
        bgGray:    '#cccccc',
        bgBlack:   '#666666',
        worksCol1: '#fbe1e2',
        worksCol2: '#e0f0ff',
        worksCol3: '#f0f0d1',
        c_d71920:  '#d71920',
        c_959595:  '#959595'
    },

    fontsCase: {
        AkzidenzGroteskProBold:     'AkzidenzGrotesk Pro Bold, sans-serif',
        AkzidenzGroteskProBoldCn:   'AkzidenzGrotesk Pro Bold Cn, sans-serif',
        AkzidenzGroteskProRegular:  'AkzidenzGrotesk Pro Regular, sans-serif',
        ArimoBold:                  'Arimo Bold, sans-serif',
        ArimoRegular:               'Arimo Regular, sans-serif',
        BitterItalic:               'Bitter Italic, sans-serif',
        BitterRegular:              'Bitter Regular, sans-serif',
        BrandonGrotesqueMedium:     'Brandon Grotesque Medium, sans-serif',
        FuturaNewBold:              'Futura New Bold, sans-serif',
        FuturaNewBook:              'Futura New Book, sans-serif',
        FuturaNewHeavy:             'Futura New Heavy, sans-serif',
        FuturaNewMedium:            'Futura New Medium, sans-serif',
        GothamProMedium:            'Gotham Pro Medium, sans-serif',
        HelveticaNeueBold:          'Helvetica Neue Bold, sans-serif',
        HelveticaNeueRegular:       'Helvetica Neue Regular, sans-serif',
        LatoBold:                   'Lato Bold, sans-serif',
        LatoRegular:                'Lato Regular, sans-serif',
        MohaveBold:                 'Mohave Bold, sans-serif',
        MohaveRegular:              'Mohave Regular, sans-serif',
        NotoSerifBold:              'Noto Serif Bold, sans-serif',
        NotoSerifItalic:            'Noto Serif Italic, sans-serif',
        PFDinTextUniversalRegular:  'PF Din Text Universal Regular, sans-serif',
        PixelCyrRegular:            'Pixel Cyr Normal, sans-serif',
        PNCB:                       'PNCB, sans-serif',
        ProximaNovaBold:            'Proxima Nova Bold, sans-serif',
        ProximaNovaCondBold:        'Proxima Nova Condensed Bold, sans-serif',
        ProximaNovaCondReg:         'Proxima Nova Condensed Regular, sans-serif',
        ProximaNovaRegular:         'Proxima Nova Regular, sans-serif',
        PTSansBold:                 'PT Sans Bold, sans-serif',
        PTSansRegular:              'PT Sans Regular, sans-serif',
        PTSansDemi:                 'PT Sans Demi, sans-serif',
        SignikaBold:                'Signika Bold, sans-serif',
        SuperclarendonBold:         'Superclarendon Bold, serif'
    },

    size: {
        header_ss:      '50px',
        header_ls:      '80px',
        footer_ss:      '93px',
        footer_ms:      '73px',
        footer_ls:      '75px',
        height_0:       0,
        paddingSide_ss: '8px',
        padding_ss:     '12px',
        paddingSide_ms: '12px',
        padding_ls:     '15px',
        paddingSide_ls: 0,
        padding_0:      0
    }
};

/*
 * Theme accessor initialization
 */
const ax = styledAx(theme);

/*
 * Accessor exports
 */
export default ax;
export const font = ax.fonts;
export const fontCase = ax.fontsCase;
export const palette = ax.palette;
export const size = ax.size;
