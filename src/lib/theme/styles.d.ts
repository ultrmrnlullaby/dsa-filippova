/* Конфигурационный файл TypeScript, позволяющий переопределять настройки библиотеки*/

import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            bg: {
                neutral: {
                    page: {
                        subtle: string;
                    };
                    surface: {
                        subtle: string;
                        subtleInverted: string;
                        accent: string;                        
                        onLight: string;
                        onDark: string;
                        disabled: string;
                    };
                    
                    elevated: {
                        subtle: string;
                    };
                    
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                primary: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };

                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    accentStatic: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                secondary: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };

                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    accentStatic: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                success: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                warning: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                critical: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                info: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
            };
            border: {
                neutral: {
                        base: string;
                        icon: string;
                        onDark: string;
                        onLight: string;
                        disabled: string;
                    };
                primary: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };

                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    accentStatic: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                secondary: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };

                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    accentStatic: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                success: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                warning: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                critical: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                info: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
            };
            link: {
                disabled: string;
                subtle: {
                    enabled: string;
                    hover: string;
                    disabled: string;
                };
                accent: {
                    enabled: string;
                    hover: string;
                    disabled: string;
                };
                onLight: {
                    enabled: string;
                    hover: string;
                    disabled: string;
                };
                onDark: {
                    enabled: string;
                    hover: string;
                    disabled: string;
                };
                inverted: {
                    enabled: string;
                    hover: string;
                    disabled: string;
                };
            };
            text: {
                neutral: {
                        base: string;
                        inverted: string;
                        onLight: string;
                        onDark: string;
                        secondary: string;
                        tetriary: string;
                        disabled: string;
                };
                primary: {
                    subtle: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };

                    accent: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    accentStatic: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                    
                    strong: {
                        enabled: string;
                        hover: string;
                        active: string;
                    };
                };
                secondary: {
                    subtle: {
                        enabled: string;
                    };

                    accent: {
                        enabled: string;
                    };
                    
                    strong: {
                        enabled: string;
                    };
                };
                success: {
                    subtle: {
                        enabled: string;
                    };
                    accent: {
                        enabled: string;
                    };                    
                    strong: {
                        enabled: string;
                    };
                };
                warning: {
                    subtle: {
                        enabled: string;
                    };
                    accent: {
                        enabled: string;
                    };                    
                    strong: {
                        enabled: string;
                    };
                };
                critical: {
                    subtle: {
                        enabled: string;
                    };
                    accent: {
                        enabled: string;
                    };                    
                    strong: {
                        enabled: string;
                    };
                };
                info: {
                    subtle: {
                        enabled: string;
                    };
                    accent: {
                        enabled: string;
                    };                    
                    strong: {
                        enabled: string;
                    };
                };
            };
        };
        typography: {
            fontFamily: {
                heading: string;
                content: string;
                component: string;
                monospace: string;
            };
            fontSize: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                content: {
                    base: string;
                    small: small;
                    extraSmall: string;
                };
                component: {
                    base: string;
                    small: small;
                    extraSmall: string;
                };
            };
            lineHeight: {
                heading: {
                    h1: string;
                    h2: string;
                    h3: string;
                    h4: string;
                    h5: string;
                    h6: string;
                };
                content: {
                    base: string;
                    small: small;
                    extraSmall: string;
                };
                component: {
                    base: string;
                    small: small;
                    extraSmall: string;
                };
            };
            fontWeight: {
                regular: string;
                medium: string;
            };
            lineHeight: {
                heading: {
                    none: string;
                };
                content: {
                    none: string;
                };
                component: {
                    none: string;
                };
            };
        };
    };
};